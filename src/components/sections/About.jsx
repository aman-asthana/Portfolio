import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode,  FaJava, FaGraduationCap, FaSchool, FaTerminal } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { BiData } from 'react-icons/bi';
import { PiCertificateFill } from "react-icons/pi";
import { useScrollAnimation, fadeInUp, fadeInLeft } from '../../utils/animations';

const About = () => {
  const [ref, controls] = useScrollAnimation();

  const services = [
    {
      icon: FaJava,
      title: 'Java Development',
      description: 'Strong foundation in Java programming with focus on object-oriented principles.',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: BiData,
      title: 'DSA',
      description: 'Proficient in Data Structures and Algorithms with problem-solving skills.',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Building responsive web applications with modern technologies.',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: HiOutlineLightBulb,
      title: 'Problem Solving',
      description: 'Analytical approach to solving complex programming challenges.',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const education = [
    {
      year: "2023 - 2026",
      degree: "Bachelor of Engineering",
      institution: "P. R. Pote Patil College of Engineering and Management, Amravati",
      major: "Computer Science & Engineering",
      score: "8.5 CGPA",
      icon: FaGraduationCap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2020 - 2023",
      degree: "Diploma",
      institution: "Dr. Panjabrao Deshmukh Polytechnic, Amravati",
      major: "Computer Science",
      score: "81%",
      icon: PiCertificateFill,
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2014 - 2020",
      degree: "High School (X)",
      institution: "Manibai Gujrathi High School, Amravati",
      major: "High School Study",
      score: "72%",
      icon: FaSchool,
      color: "from-amber-500 to-orange-500"
    }
  ];

  const experience = [
    {
      year: "2024",
      role: "Data Analytics using AI-LLMs",
      company: "Vois for Tech(AICTE)",
      location: "Remote",
      description: "Analysis the dataset and make various projects.",
      icon: FaLaptopCode,
      color: "from-emerald-500 to-teal-500"
    },
    
    {
      year: "2023",
      role: "AI-ML Virtual Intern",
      company: "EduSkills(AICTE)",
      location: "Remote",
      description: "Learned and implemented various AI-ML algorithms and projects.",
      icon: FaTerminal,
      color: "from-orange-500 to-red-500"
    },

    {
      year: "2022",
      role: "Web Development Intern",
      company: "PrimaThink Pvt. Ltd.",
      location: "On-site",
      description: "Built web applications using HTML, CSS and Bootstrap. Implemented modern UI components and state management.",
      icon: FaCode,
      color: "from-blue-500 to-cyan-500"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      id="about"
      className="relative z-10 py-20 px-4"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-cyan-400 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-cyan-400 mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I&apos;m a passionate developer who loves to create beautiful and functional web applications. 
            With expertise in modern web technologies, I focus on delivering high-quality solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} p-3 mb-4`}>
                <service.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education & Experience Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Experience Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: false }}
                className="relative"
              >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 hover:border-gray-700 transition-all relative min-h-[180px]">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${exp.color} p-2 sm:p-3`}>
                        <exp.icon className="w-full h-full text-white" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2 mb-2">
                          <h4 className="text-lg sm:text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {exp.role}
                          </h4>
                          <span className="text-sm text-cyan-400">{exp.year}</span>
                        </div>
                        <p className="text-gray-300 font-medium text-sm sm:text-base">{exp.company}</p>
                        <p className="text-gray-400 text-xs sm:text-sm mt-1">{exp.location}</p>
                        <p className="text-gray-400 text-xs sm:text-sm mt-2 line-clamp-3">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Education Journey</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: false }}
                  className="relative"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
                  <div className="relative pl-6 sm:pl-8">
                    <div className={`absolute left-[-10px] sm:left-[-12px] top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r ${edu.color} p-1 flex items-center justify-center`}>
                      <edu.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-6 hover:border-gray-700 transition-colors min-h-[180px]">
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 mb-2">
                        <h4 className="text-lg sm:text-xl font-semibold text-white">{edu.degree}</h4>
                        <span className="text-sm text-cyan-400">{edu.year}</span>
                      </div>
                      <p className="text-gray-300 font-medium text-sm sm:text-base">{edu.institution}</p>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1">{edu.major}</p>
                      <div className="mt-3 inline-block px-3 py-1 rounded-full bg-gray-800/50 text-xs sm:text-sm text-cyan-400">
                        {edu.score}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;