import { useState } from "react";
import { Timeline } from "../ui/timeline";
import { FaGithub, FaExternalLinkAlt, FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";
import ProjectModal from "../ui/ProjectModal";
import { useScrollAnimation, fadeInUp, fadeInRight } from '../../utils/animations';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, controls] = useScrollAnimation();
  
  // Add image arrays for each project
  const projectImages = {
    expenseTrade: [
      "/media/Expensetrade.png",
      "/media/Expensetrade2.png",
      "/media/Expensetrade3.png"
    ],
    portfolio: [
      "/media/portfolio1.png",
      "/media/portfolio2.png"
    ],
    agripro: [
      "/media/agripro.png",
      "/media/agripro2.png",
      "/media/agripro3.png"
    ],
    // Add more project images as needed
  };

  const certificates = [
    {
      title: "Java Programming",
      issuer: "NPTEL",
      date: "2025",
      image: "/media/certificates/Java.jpg",
      credential: "UC-XXX123"
    },
    
    {
      title: "Database and Management System",
      issuer: "NPTEL",
      date: "2024",
      image: "/media/certificates/DBMS.jpg",
      credential: "CR-XXX456"
    },
    {
      title: "React.js",
      issuer: "Infosys Spring board",
      date: "2025",
      image: "/media/certificates/ReactJs.jpg",
      credential: "CR-XXX456"
    },
    // Add more certificates as needed
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // Modify your project card to be clickable
  const ProjectCard = ({ title, images, description, children }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800 cursor-pointer"
      onClick={() => handleProjectClick({ title, description,  images })}
    >
      {children}
    </motion.div>
  );

  const projects = [
    {
      title: "Featured Projects",
      content: (
        <div>
          <motion.section
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={fadeInRight}
            >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <ProjectCard 
              title="Expense Trade"
              images={projectImages.expenseTrade}
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Expense Trade</h3>
                  <div className="flex gap-3">
                    <a href="https://github.com/aman-asthana/ExpenseTrade" className="text-neutral-400 hover:text-white transition-colors">
                      <FaGithub size={20} />
                    </a>
                    <a href="https://expensetrade.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm mb-4">
                  A Expense Trade is a expense tracking application with real-time data visualization and budget management features. I created this website in Hackathon 2025 with my team.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400">Python</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400">Streamlit</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400">SQLite</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-400">yFinance</span>
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-20 group-hover:opacity-30 transition-opacity " />
                  <img 
                    src="/media/Expensetrade.png" 
                    alt="Expense Trade Preview" 
                    className="w-full h-full object-fit"
                  />
                </div>
              </div>
            </ProjectCard>

            {/* AgriPro Project */}
          <ProjectCard 
            title="AgriPro"
            images={projectImages.agripro}
          >
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">AgriPro</h3>
                <div className="flex gap-3">
                  <a href="https://github.com/yourusername/agripro" className="text-neutral-400 hover:text-white transition-colors">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://agripro-demo.com" className="text-neutral-400 hover:text-white transition-colors">
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
              <p className="text-neutral-400 text-sm mb-4">
                A comprehensive agriculture information platform providing news, costs, and insights to help farmers make better decisions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400">HTML</span>
                <span className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400">CSS</span>
                <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400">JavaScript</span>
                <span className="px-3 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-400">PHP</span>
                <span className="px-3 py-1 text-xs rounded-full bg-pink-500/10 text-pink-400">Bootstrap</span>
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-20 group-hover:opacity-30 transition-opacity" />
                <img 
                  src="/media/agripro.png" 
                  alt="AgriPro Preview" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ProjectCard>
            
          </div>
          </motion.section>
        </div>
      ),
    },

    //****************************** uncomment below when the more project to add****************************************

    // {
    //   title: "More Projects",
    //   content: (
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
    //       {/* Protfolio website */}
    //       <ProjectCard 
    //           title="Portfolio Website"
    //           images={projectImages.portfolio}
    //         >
    //           <div className="p-5">
    //             <div className="flex items-center justify-between mb-4">
    //               <h3 className="text-xl font-bold text-white">Portfolio Website</h3>
    //               <div className="flex gap-3">
    //                 <a href="#" className="text-neutral-400 hover:text-white transition-colors">
    //                   <FaGithub size={20} />
    //                 </a>
    //                 <a href="#" className="text-neutral-400 hover:text-white transition-colors">
    //                   <FaExternalLinkAlt size={20} />
    //                 </a>
    //               </div>
    //             </div>
    //             <p className="text-neutral-400 text-sm mb-4">
    //               Modern portfolio website with smooth animations, dark mode, and interactive components.
    //             </p>
    //             <div className="flex flex-wrap gap-2 mb-4">
    //               <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400">React</span>
    //               <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400">Tailwind</span>
    //               <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400">Framer Motion</span>
    //             </div>
    //             <div className="relative h-48 rounded-lg overflow-hidden">
    //               <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 group-hover:opacity-30 transition-opacity" />
    //               <img 
    //                 src="/path-to-your-image.jpg" 
    //                 alt="Portfolio Preview" 
    //                 className="w-full h-full object-cover"
    //               />
    //             </div>
    //           </div>
    //         </ProjectCard>

    //       {/* Weather App Project */}
    //       <ProjectCard
    //         title="Weather App"
    //         images={projectImages.weather}
    //       >
    //         <div className="p-5">
    //           <div className="flex items-center justify-between mb-4">
    //             <h3 className="text-xl font-bold text-white">Weather App</h3>
    //             <div className="flex gap-3">
    //               <a href="https://github.com/yourusername/weather-app" className="text-neutral-400 hover:text-white transition-colors">
    //                 <FaGithub size={20} />
    //               </a>
    //               <a href="https://weather-app-demo.com" className="text-neutral-400 hover:text-white transition-colors">
    //                 <FaExternalLinkAlt size={20} />
    //               </a>
    //             </div>
    //           </div>
    //           <p className="text-neutral-400 text-sm mb-4">
    //             Real-time weather application with location-based forecasts, interactive maps, and weather alerts.
    //           </p>
    //           <div className="flex flex-wrap gap-2 mb-4">
    //             <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400">React</span>
    //             <span className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400">OpenWeather API</span>
    //             <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400">Axios</span>
    //           </div>
    //           <div className="relative h-48 rounded-lg overflow-hidden">
    //             <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 opacity-20 group-hover:opacity-30 transition-opacity" />
    //             <img 
    //               src="/media/weather.png" 
    //               alt="Weather App Preview" 
    //               className="w-full h-full object-cover"
    //             />
    //           </div>
    //         </div>
    //       </ProjectCard>

    //       {/* Task Manager Project */}
    //       <ProjectCard
    //         title="Task Manager"
    //         images={projectImages.taskManager}
    //       >
    //         <div className="p-5">
    //           <div className="flex items-center justify-between mb-4">
    //             <h3 className="text-xl font-bold text-white">Task Manager</h3>
    //             <div className="flex gap-3">
    //               <a href="https://github.com/yourusername/task-manager" className="text-neutral-400 hover:text-white transition-colors">
    //                 <FaGithub size={20} />
    //               </a>
    //               <a href="https://task-manager-demo.com" className="text-neutral-400 hover:text-white transition-colors">
    //                 <FaExternalLinkAlt size={20} />
    //               </a>
    //             </div>
    //           </div>
    //           <p className="text-neutral-400 text-sm mb-4">
    //             A collaborative task management tool with real-time updates, task prioritization, and team collaboration features.
    //           </p>
    //           <div className="flex flex-wrap gap-2 mb-4">
    //             <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400">React</span>
    //             <span className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400">Node.js</span>
    //             <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400">MongoDB</span>
    //             <span className="px-3 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-400">Socket.io</span>
    //           </div>
    //           <div className="relative h-48 rounded-lg overflow-hidden">
    //             <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-pink-500 opacity-20 group-hover:opacity-30 transition-opacity" />
    //             <img 
    //               src="/media/taskmanager.png" 
    //               alt="Task Manager Preview" 
    //               className="w-full h-full object-cover"
    //             />
    //           </div>
    //         </div>
    //       </ProjectCard>
    //     </div>
    //   ),
    // },
    {
      title: "Achievements",
      content: (
        <div className="space-y-6">
          {/* Certificates Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaCertificate size={24} className="text-cyan-400" />
              <h3 className="text-xl font-bold text-white">Certificates</h3>
            </div>
              <motion.section
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={fadeInUp}
            >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 rounded-xl overflow-hidden"
                  onClick={() => handleProjectClick({
                    title: cert.title,
                    description: `Issued by ${cert.issuer} • ${cert.date}`,
                    images: [cert.image]
                  })}
                >
                 
                  <div className="p-4">
                    <h4 className="text-white font-medium mb-1 group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-400">{cert.issuer}</span>
                      <span className="text-neutral-500">{cert.date}</span>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Certificate</span>
                      <FaExternalLinkAlt size={12} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
              </motion.section>
          </motion.div>
        </div>
      ),
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      id="projects"
      className="relative z-10 py-20 px-4"
    >
      <div className="container mx-auto">
        <div className="w-full">
          <Timeline data={projects} />
        </div>
        {/* Add the modal */}
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          images={selectedProject?.images || []}
          title={selectedProject?.title || ''}
        />
      </div>
    </motion.section>
  );
}