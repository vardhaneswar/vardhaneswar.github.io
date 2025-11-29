import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, ExternalLink } from 'lucide-react';

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      company: 'College Project Role',
      title: 'Machine Learning Research Engineer',
      period: 'Apr 2025 – Aug 2023',
      color: 'cyan',
      achievements: [
        'Achieved 92.5% accuracy on Kaggle EEG datasets by optimizing preprocessing steps and tuning Scikit-learn pipelines',
        'Benchmarked 5 distinct algorithms (SVM, Random Forest) reaching peak F1-score of 92.5% via GridSearchCV',
        'Built automated Python scripts that standardized model training and metric collection, eliminating manual rework',
        'Analyzed 12 state-of-the-art Transformer frameworks to validate feature engineering strategies'
      ]
    },
    {
      company: 'HCL Technologies',
      title: 'Machine Learning Operations Engineer',
      period: 'Sep 2022 – Dec 2023',
      color: 'green',
      achievements: [
        'Sped up model deployment by 55% by replacing manual scripts with automated end-to-end training and inference pipelines on AWS and Kubernetes',
        'Boosted model reliability by 40% by setting up MLflow to strictly track experiments, versioning, and lineage',
        'Caught 100% of silent failures by building Prometheus + Grafana dashboards tracking data drift, GPU crashes, and latency spikes',
        'Shortened release cycles by 60% by building a GitHub Actions pipeline with strict unit test and data checks',
        'Dropped inference latency by 35% by refactoring Docker images and running on GPU-backed EKS nodes'
      ]
    },
    {
      company: 'HCL Technologies',
      title: 'Cloud & Machine Learning Operations Engineer',
      period: 'Sep 2021 – Aug 2022',
      color: 'purple',
      achievements: [
        'Stabilized model performance (up 32%) by moving to automated feature pipelines with Python, Spark, and AWS EMR',
        'Cut training time by 45% by rewriting data preprocessing jobs with better caching and distributed processing',
        'Boosted deployment reliability by 50% using Terraform to standardize EKS cluster and S3 feature store provisioning',
        'Reduced cloud costs by 20% by migrating to Spot instances and tightening autoscaling rules',
        'Decreased downtime by 35% with CloudWatch and Prometheus alerts for latency spike detection'
      ]
    },
    {
      company: 'DHAAPS',
      title: 'Machine Learning Platform Engineering Intern',
      period: 'July 2020 – Jun 2021',
      color: 'cyan',
      achievements: [
        'Recovered 40% of researcher productivity by standardizing setup with Docker and Kubernetes',
        'Cut deployment time by 50% using multi-stage Docker builds for PyTorch and scikit-learn containers',
        'Solved reproducibility problems by forcing version control on data pipelines and logging all parameters',
        'Scaled GPU training capacity by writing Terraform modules for automatic node group provisioning',
        'Increased experiment throughput by implementing Ray-based distributed training for parallel tasks'
      ]
    }
  ];

  const getColorClasses = (color) => ({
    active: color === 'cyan' ? 'border-cyan-400 text-cyan-400 bg-cyan-500/10' : 
            color === 'green' ? 'border-green-400 text-green-400 bg-green-500/10' : 
            'border-purple-400 text-purple-400 bg-purple-500/10',
    dot: color === 'cyan' ? 'bg-cyan-400' : 
         color === 'green' ? 'bg-green-400' : 'bg-purple-400',
    glow: color === 'cyan' ? 'shadow-cyan-500/30' : 
          color === 'green' ? 'shadow-green-500/30' : 'shadow-purple-500/30'
  });

  return (
    <section id="experience" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-cyan-400 font-mono text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Company tabs */}
            <div className="lg:col-span-4">
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0">
                {experiences.map((exp, index) => {
                  const colors = getColorClasses(exp.color);
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`relative flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 text-left min-w-max lg:min-w-0 ${
                        isActive 
                          ? `${colors.active} border-current shadow-lg ${colors.glow}`
                          : 'border-gray-700/50 text-gray-400 hover:text-gray-300 hover:border-gray-600'
                      }`}
                    >
                      <Briefcase className="w-4 h-4 flex-shrink-0" />
                      <span className="font-medium text-sm">{exp.company}</span>
                      {isActive && <ChevronRight className="w-4 h-4 ml-auto hidden lg:block" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Experience details */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                {experiences.map((exp, index) => {
                  if (index !== activeIndex) return null;
                  const colors = getColorClasses(exp.color);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm"
                    >
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      
                      <ul className="space-y-4">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-2 flex-shrink-0`} />
                            <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}