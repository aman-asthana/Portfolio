import { useState, useEffect, useRef } from "react";

const MouseCurve = () => {
  const [trail, setTrail] = useState([]);
  const requestRef = useRef(null);
  const lastMouseMove = useRef(Date.now());

  useEffect(() => {
    const handleMouseMove = (event) => {
      lastMouseMove.current = Date.now();
      const { clientX, clientY } = event;

      setTrail((prevTrail) => {
        const newTrail = [...prevTrail, { x: clientX, y: clientY, opacity: 1 }];
        return newTrail.slice(-40); // Keeps more segments for smoother motion
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const animate = () => {
    const timeSinceMove = Date.now() - lastMouseMove.current;

    setTrail((prevTrail) => {
      if (timeSinceMove > 300) {
        return prevTrail.slice(1);
      }

      return prevTrail.map((point, index) => ({
        x: point.x + (prevTrail[index + 1]?.x - point.x || 0) * 0.5,
        y: point.y + (prevTrail[index + 1]?.y - point.y || 0) * 0.5,
        opacity: Math.max(0, point.opacity - 0.02),
      }));
    });

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [trail]);

  const createSmoothPath = () => {
    if (trail.length < 2) return "";

    let path = `M ${trail[0].x},${trail[0].y}`;
    for (let i = 1; i < trail.length - 1; i++) {
      const xMid = (trail[i].x + trail[i + 1].x) / 2;
      const yMid = (trail[i].y + trail[i + 1].y) / 2;
      path += ` Q ${trail[i].x},${trail[i].y} ${xMid},${yMid}`;
    }

    return path;
  };

  return (
    <svg className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[9999]">
      <defs>
        <linearGradient id="neonCyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00ffff" />
          <stop offset="50%" stopColor="#00aaff" />
          <stop offset="100%" stopColor="#0088ff" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d={createSmoothPath()}
        stroke="url(#neonCyanGradient)"
        strokeWidth="4"  // Keeping it thin as you changed
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-opacity duration-500"
        style={{
          filter: "url(#glow)",  // Neon glow effect
          opacity: 0.9,  // Soft transparent glow
        }}
      />
    </svg>
  );
};

export default MouseCurve;
