import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, ArrowUpRight } from 'lucide-react';
import { Button } from "../ui/button";


export default function ProjectsSection() {
  const featuredProjects = [
    {
      title: 'Automated MLOps Platform for Vehicle Insurance Decisioning',
      description: 'End-to-end MLOps pipeline for vehicle-insurance qualification that automated data ingestion and validation, with Dockerized FastAPI model service on AWS EC2.',
      metrics: [
        { value: '120hrs/mo', label: 'Manual Work Saved' },
        { value: '4 min', label: 'Deployment Time' },
        { value: '28%', label: 'Accuracy Improvement' },
        { value: '99%', label: 'Uptime' }
      ],
      tech: ['Python', 'FastAPI', 'Docker', 'AWS EC2', 'GitHub Actions', 'S3', 'IAM'],
      color: 'cyan',
      github: 'https://github.com'
    },
    {
      title: 'Multi-Source RAG Financial Intelligence System',
      description: 'Real-time financial insights platform using Retrieval-Augmented Generation that integrates Yahoo Finance and SEC data for 30+ companies.',
      metrics: [
        { value: '60%', label: 'Less Hallucinations' },
        { value: '42%', label: 'Accuracy Boost' },
        { value: '99.9%', label: 'System Uptime' },
        { value: '80%', label: 'Research Time Saved' }
      ],
      tech: ['Python', 'FAISS', 'BM25', 'Docker', 'Microservices', 'Yahoo Finance API', 'SEC Data'],
      color: 'green',
      github: 'https://github.com'
    }
  ];

  const getColorClasses = (color) => ({
    border: color === 'cyan' ? 'border-cyan-500/30 hover:border-cyan-500/50' : 
            'border-green-500/30 hover:border-green-500/50',
    glow: color === 'cyan' ? 'group-hover:shadow-cyan-500/10' : 
          'group-hover:shadow-green-500/10',
    accent: color === 'cyan' ? 'text-cyan-400' : 'text-green-400',
    badge: color === 'cyan' ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' : 
           'bg-green-500/10 text-green-300 border-green-500/20',
    metric: color === 'cyan' ? 'from-cyan-400 to-blue-400' : 'from-green-400 to-emerald-400'
  });

  return (
    <section id="projects" className="relative py-32 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-cyan-400 font-mono text-sm">05.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
          </div>
          
          <p className="text-gray-400 max-w-2xl mb-16">
            Real-world ML/MLOps projects with measurable business impact and production-grade architecture.
          </p>

          {/* Featured projects */}
          <div className="space-y-8">
            {featuredProjects.map((project, index) => {
              const colors = getColorClasses(project.color);
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`group relative rounded-3xl bg-gray-800/30 border ${colors.border} backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl ${colors.glow}`}
                >
                  <div className="p-8 lg:p-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <Folder className={`w-6 h-6 ${colors.accent}`} />
                        <span className={`text-xs font-mono ${colors.accent}`}>Featured Project</span>
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                      >
                        <Github className="w-5 h-5 text-gray-400 hover:text-white" />
                      </a>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-8 max-w-3xl">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="text-center p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                          <div className={`text-2xl font-bold bg-gradient-to-r ${colors.metric} bg-clip-text text-transparent mb-1`}>
                            {metric.value}
                          </div>
                          <div className="text-gray-500 text-xs">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${colors.badge}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}