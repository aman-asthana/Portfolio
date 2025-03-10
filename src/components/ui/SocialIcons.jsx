import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialIcons = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/aman-asthana',
      color: '#333',
      hoverColor: '#2b3137'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/aman-asthana',
      color: '#0077b5',
      hoverColor: '#006396'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/amanasthana2004',
      color: '#1DA1F2',
      hoverColor: '#0d95e8'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/aman._.asthana',
      color: '#E4405F',
      hoverColor: '#d6294b'
    }
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full transition-colors"
          style={{
            backgroundColor: `${social.color}20`,
            color: social.color
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `${social.hoverColor}40`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = `${social.color}20`;
          }}
        >
          <social.icon size={20} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons; 