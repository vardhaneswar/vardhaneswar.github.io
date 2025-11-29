import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="relative py-32 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-cyan-400 font-mono text-sm">07.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
          </div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl bg-gray-800/30 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10">
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Master's of Science in Computer Science</h3>
                    <p className="text-cyan-400 font-medium">Rivier University</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Nashua, NH</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Jan 2024 - Dec 2025</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}