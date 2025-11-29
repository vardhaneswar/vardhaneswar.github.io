import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              EV
            </p>
            <p className="text-gray-500 text-sm mt-1">
              MLOps & Cloud Engineer
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/eswar-vardhan-3624611b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/vardhaneswar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-500 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:vardhaneswar362@gmail.com"
              className="p-2 rounded-lg text-gray-500 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm flex items-center gap-1 justify-center md:justify-end">
              Built with <Heart className="w-4 h-4 text-red-500" /> by Eswar Vardhan
            </p>
            <p className="text-gray-600 text-xs mt-1">
              © {currentYear} All rights reserved
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}