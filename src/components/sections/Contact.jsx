import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using send instead of sendForm
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Your Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Your Template ID
        {
          to_name: 'Aman', // Your name as recipient
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Your Public Key
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({
          from_name: '',
          from_email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="relative z-10 py-16 sm:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-cyan-400 mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-cyan-400 mx-auto rounded-full mb-6 sm:mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto px-4 text-sm sm:text-base">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new projects and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-10" />
            <div className="relative bg-neutral-900/50 backdrop-blur-xl p-4 sm:p-8 rounded-2xl border border-white/10">
              <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="w-full">
                    <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      value={formData.from_name}  // Changed from formData.name
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-neutral-800/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-300 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="from_email" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      value={formData.from_email}  // Changed from formData.email
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-neutral-800/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-300 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-neutral-800/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-300 text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-neutral-800/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-300 text-sm sm:text-base resize-none"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-cyan-500/25'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {submitStatus && (
                  <div
                    className={`text-center p-3 rounded-lg ${
                      submitStatus === 'success'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {submitStatus === 'success'
                      ? 'Message sent successfully!'
                      : 'Failed to send message. Please try again.'}
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-4 sm:gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-xl bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full">
                      <FaEnvelope className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      amanasthana431@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-xl bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full">
                      <FaPhone className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-400 hover:text-purple-400 transition-colors">
                      +91 9359539232
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-xl bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-gradient-to-r from-rose-500/20 to-orange-500/20 rounded-full">
                      <FaMapMarkerAlt className="w-6 h-6 text-rose-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                    <p className="text-gray-400">
                      Amravati, Maharashtra
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}