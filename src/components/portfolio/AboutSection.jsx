import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { value: '4+', label: 'Years Experience', color: 'cyan' },
    { value: '55%', label: 'Deployment Speedup', color: 'green' },
    { value: '40%', label: 'Reliability Boost', color: 'purple' },
    { value: '99%', label: 'Uptime Achieved', color: 'cyan' },
  ];

  return (
    <section id="about" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-cyan-400 font-mono text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Photo */}
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-gray-700/50">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_692b36992d45f3a5bc07d9fa/a44c4d06e_WhatsAppImage2025-11-29at122946_0a795a5d.jpg"
                    alt="Eswar Vardhan"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-cyan-500/30 rounded-xl" />
                <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-purple-500/30 rounded-xl" />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Bio card */}
              <div className="p-6 rounded-2xl bg-gray-800/20 border border-gray-700/50 backdrop-blur-sm">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I've spent the last four years focused on the one thing that actually matters in AI: 
                  <span className="text-cyan-400 font-semibold"> getting models out of a Jupyter notebook and into production without them breaking.</span>
                </p>
                <p className="text-gray-400 leading-relaxed">
                  My focus is entirely on MLOps. I sit between Data Science and DevOps, building out the AWS/Azure environments 
                  needed for fast experimentation. I take care of the Kubernetes clusters and Terraform scripts so the training 
                  pipelines don't crash. Basically, I manage the systems so the data scientists can ignore the infrastructure.
                </p>
              </div>

              {/* Info badges */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/30 border border-gray-700/50">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300 text-sm">Boston, MA</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/30 border border-gray-700/50">
                  <GraduationCap className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300 text-sm">MS Computer Science - Rivier University</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/30 border border-gray-700/50">
                  <Briefcase className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300 text-sm">MLOps Engineer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group p-6 rounded-2xl bg-gray-800/20 border border-gray-700/50 text-center hover:border-gray-600/50 transition-all duration-300"
              >
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${
                  stat.color === 'cyan' ? 'from-cyan-500/5' : 
                  stat.color === 'green' ? 'from-green-500/5' : 'from-purple-500/5'
                } to-transparent`} />
                <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${
                  stat.color === 'cyan' ? 'from-cyan-400 to-blue-400' : 
                  stat.color === 'green' ? 'from-green-400 to-emerald-400' : 'from-purple-400 to-pink-400'
                } bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}