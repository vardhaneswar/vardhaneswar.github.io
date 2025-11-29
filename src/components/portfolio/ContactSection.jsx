import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Mail, Linkedin, Github, MapPin, Phone, Send, ExternalLink } from 'lucide-react';
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vardhaneswar362@gmail.com',
      href: 'mailto:vardhaneswar362@gmail.com',
      color: 'cyan'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '978-423-1913',
      href: 'tel:+19784231913',
      color: 'green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Boston, MA',
      color: 'purple'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/eswar-vardhan-3624611b6/',
      color: 'cyan'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/vardhaneswar',
      color: 'green'
    }
  ];

  const getColorClasses = (color) => ({
    icon: color === 'cyan' ? 'text-cyan-400 bg-cyan-500/10' : 
          color === 'green' ? 'text-green-400 bg-green-500/10' : 
          'text-purple-400 bg-purple-500/10',
    hover: color === 'cyan' ? 'hover:border-cyan-500/50' : 
           color === 'green' ? 'hover:border-green-500/50' : 
           'hover:border-purple-500/50'
  });

  return (
    <section id="contact" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-cyan-400 font-mono text-sm">08.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
          </div>
          
          <p className="text-gray-400 max-w-2xl mb-16">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500/50 h-12 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500/50 h-12 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500/50 min-h-32 rounded-xl resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              {/* Contact cards */}
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const colors = getColorClasses(item.color);
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 transition-all duration-300 ${colors.hover}`}
                    >
                      <div className={`p-3 rounded-xl ${colors.icon}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-white hover:text-cyan-400 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social links */}
              <div className="pt-6">
                <p className="text-gray-400 text-sm mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => {
                    const colors = getColorClasses(link.color);
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-800/30 border border-gray-700/50 text-gray-300 hover:text-white transition-all duration-300 ${colors.hover}`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{link.label}</span>
                        <ExternalLink className="w-4 h-4 opacity-50" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}