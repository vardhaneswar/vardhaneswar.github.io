import React, { useEffect, useState } from "react";
import { ChevronDown, Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "MLOps & Cloud Engineer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20"
    >
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 border border-cyan-500/20 rotate-45"
        />

        <motion.div
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 right-20 w-24 h-24 border border-purple-500/20 rounded-full"
        />

        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-4 h-4 bg-green-400/30 rounded-full blur-sm"
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-400">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              ESWAR
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              VARDHAN
            </span>
          </h1>

          {/* Typed title */}
          <div className="h-12 flex items-center justify-center mb-8">
            <span className="text-xl md:text-2xl text-gray-300 font-mono">
              {typedText}
              <span className="animate-pulse text-cyan-400">|</span>
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Building the infrastructure that takes AI from notebooks to
            production.
            <span className="text-cyan-400"> AWS</span> •
            <span className="text-green-400"> Kubernetes</span> •
            <span className="text-purple-400"> ML Pipelines</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            {/* Contact Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,255,0.4)]"
            >
              <Mail className="w-5 h-5 mr-2 inline-block" />
              Get In Touch
            </button>

            {/* View Projects Button */}
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-6 border-2 border-gray-700 hover:border-cyan-500/50 bg-transparent text-white font-semibold rounded-xl transition-all duration-300 hover:bg-cyan-500/5"
            >
              View Projects
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/eswar-vardhan-3624611b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-gray-700/50 bg-gray-800/30 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-gray-700/50 bg-gray-800/30 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" />
            </a>

            <a
              href="mailto:vardhaneswar362@gmail.com"
              className="p-3 rounded-xl border border-gray-700/50 bg-gray-800/30 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection("about")}
            className="cursor-pointer"
          >
            <ChevronDown className="w-8 h-8 text-gray-500 hover:text-cyan-400 transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
