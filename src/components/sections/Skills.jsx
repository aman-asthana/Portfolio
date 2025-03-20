import React from 'react'
import { motion } from 'framer-motion';
import { InfiniteSlider } from '../ui/infinite-slider';
import { FaReact, FaDatabase, FaNodeJs, FaJava, FaPython, FaJs, FaHtml5, FaCss3, FaGitAlt, FaBootstrap, FaCode } from 'react-icons/fa';
import { TbBrandDjango, TbBrandCpp } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiC, SiMysql, SiPostgresql, SiMongodb, SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import { BiData } from "react-icons/bi";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { icon: FaJava, name: 'Java', color: '#007396', level: 'Advanced' },
        { icon: TbBrandCpp, name: 'C++', color: '#00599C', level: 'Advanced' },
        { icon: SiC, name: 'C', color: '#A8B9CC', level: 'Intermediate' },
        { icon: FaPython, name: 'Python', color: '#3776AB', level: 'Intermediate' },
        { icon: FaJs, name: 'JavaScript', color: '#F7DF1E', level: 'Intermediate' },
      ]
    },
    {
      title: "Web Technologies",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { icon: FaReact, name: 'React.js', color: '#61DAFB', level: 'Intermediate' },
        { icon: FaNodeJs, name: 'Node.Js', color: '#6DB33F', level: 'Intermediate' },
        { icon: FaHtml5, name: 'HTML', color: '#E34F26', level: 'Advanced' },
        { icon: FaCss3, name: 'CSS', color: '#1572B6', level: 'Advanced' },
        { icon: RiTailwindCssFill, name: 'TailwindCSS', color: '#06B6D4', level: 'Intermediate' },
        { icon: FaBootstrap, name: 'Bootstrap', color: '#7952B3', level: 'Intermediate' },
      ]
    },
    {
      title: "Backend & Databases",
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { icon: TbBrandDjango, name: 'Django', color: '#092E20', level: 'Intermediate' },
        { icon: FaNodeJs, name: 'Node.Js', color: '#6DB33F', level: 'Intermediate' },
        { icon: SiMysql, name: 'MySQL', color: '#4479A1', level: 'Intermediate' },
        { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791', level: 'Basic' },
        { icon: SiMongodb, name: 'MongoDB', color: '#47A248', level: 'Basic' },
      ]
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="relative z-10 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-cyan-400 mb-4">
            Skills & Technologies
              </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-cyan-400 rounded-full mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized in Data Structures & Algorithms with a strong foundation in Java programming.
            Continuously expanding knowledge in web technologies and backend development.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
                <div className={`h-px flex-grow bg-gradient-to-r ${category.gradient} opacity-20`} />
              </div>
              
              <div className="relative">
                {/* Left fade gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-20" />
                
                {/* Right fade gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-20" />
                
                <InfiniteSlider 
                  gap={24} 
                  className="w-full h-[180px]  flex items-center"
                  duration={25}
                  durationOnHover={50}
                  reverse={categoryIndex % 2 === 1}
                >
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="relative group w-[280px]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl transform transition-transform group-hover:scale-105" />
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${category.gradient} rounded-xl transition-opacity`} />
                      <div className="relative p-6 rounded-xl border border-gray-800 group-hover:border-gray-700 transition-colors">
                        <div className="flex items-center gap-4 mb-4">
                          <skill.icon size={28} style={{ color: skill.color }} className="group-hover:scale-110 transition-transform" />
                          <span className="text-lg text-gray-300 font-medium">{skill.name}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500"></span>
                          <div className="h-1.5 w-80 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: '100%' }}
                              whileInView={{ width: '100%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className={`h-full bg-gradient-to-r ${category.gradient}`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
      </InfiniteSlider>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
