export default function GradientText({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    
  };

  return (
    <div
      className={`relative mx-auto flex max-w-fit flex-row items-center justify-center ${showBorder ? 'p-1' : ''} transition-all duration-500 hover:scale-[1.02] ${className}`}
    >
      
      <div
        className="inline-block relative z-2 text-transparent bg-cover animate-gradient will-change-transform transition-all"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "400% 100%",
        }}
      >
        {children}
      </div>
      
      
    </div>
  );
}

