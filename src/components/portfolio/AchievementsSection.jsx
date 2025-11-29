import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Zap, Clock, Shield, Server, GitBranch } from 'lucide-react';

const AnimatedCounter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function AchievementsSection() {
  const achievements = [
    {
      icon: TrendingUp,
      value: 55,
      suffix: '%',
      label: 'Deployment Speedup',
      description: 'Faster model deployments with automated CI/CD pipelines',
      color: 'cyan'
    },
    {
      icon: Shield,
      value: 100,
      suffix: '%',
      label: 'Failure Detection',
      description: 'Silent failures caught with Prometheus + Grafana monitoring',
      color: 'green'
    },
    {
      icon: Clock,
      value: 60,
      suffix: '%',
      label: 'Shorter Release Cycles',
      description: 'GitHub Actions pipeline with strict validation gates',
      color: 'purple'
    },
    {
      icon: Zap,
      value: 35,
      suffix: '%',
      label: 'Latency Reduction',
      description: 'Optimized Docker images on GPU-backed EKS nodes',
      color: 'cyan'
    },
    {
      icon: Server,
      value: 20,
      suffix: '%',
      label: 'Cost Savings',
      description: 'Spot instances and optimized autoscaling rules',
      color: 'green'
    },
    {
      icon: GitBranch,
      value: 40,
      suffix: '%',
      label: 'Productivity Boost',
      description: 'Standardized ML platform with Docker and Kubernetes',
      color: 'purple'
    }
  ];

  const getColorClasses = (color) => ({
    icon: color === 'cyan' ? 'text-cyan-400 bg-cyan-500/10' : 
          color === 'green' ? 'text-green-400 bg-green-500/10' : 
          'text-purple-400 bg-purple-500/10',
    gradient: color === 'cyan' ? 'from-cyan-400 to-blue-400' : 
              color === 'green' ? 'from-green-400 to-emerald-400' : 
              'from-purple-400 to-pink-400',
    border: color === 'cyan' ? 'hover:border-cyan-500/30' : 
            color === 'green' ? 'hover:border-green-500/30' : 
            'hover:border-purple-500/30'
  });

  return (
    <section id="achievements" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-cyan-400 font-mono text-sm">06.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Impact & Numbers</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
          </div>
          
          <p className="text-gray-400 max-w-2xl mb-16">
            Measurable improvements I've delivered across MLOps infrastructure and cloud platforms.
          </p>

          {/* Achievements grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const colors = getColorClasses(achievement.color);
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative p-6 rounded-2xl bg-gray-800/20 border border-gray-700/50 backdrop-blur-sm transition-all duration-300 ${colors.border}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${colors.icon}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className={`text-4xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                      <AnimatedCounter end={achievement.value} suffix={achievement.suffix} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{achievement.label}</h3>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}