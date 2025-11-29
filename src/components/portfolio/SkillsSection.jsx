import React from 'react';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Languages & Scripting',
      color: 'cyan',
      skills: ['Python', 'Bash', 'SQL', 'PowerShell', 'YAML']
    },
    {
      title: 'Machine Learning & DL',
      color: 'purple',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'HuggingFace', 'ONNX']
    },
    {
      title: 'MLOps & Model Lifecycle',
      color: 'green',
      skills: ['MLflow', 'DVC', 'Kubeflow', 'SageMaker Pipelines', 'Feature Stores', 'Model Registry', 'Drift Detection']
    },
    {
      title: 'Model Serving',
      color: 'cyan',
      skills: ['FastAPI', 'gRPC', 'TorchServe', 'Nvidia Triton', 'KServe']
    },
    {
      title: 'Data Engineering',
      color: 'purple',
      skills: ['Airflow', 'Prefect', 'Kafka', 'Kinesis', 'Spark', 'Great Expectations']
    },
    {
      title: 'Databases & Storage',
      color: 'green',
      skills: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'MinIO', 'Pinecone', 'FAISS']
    }
  ];

  const getColorClasses = (color) => ({
    border: color === 'cyan' ? 'border-cyan-500/30 hover:border-cyan-500/60' : 
            color === 'green' ? 'border-green-500/30 hover:border-green-500/60' : 
            'border-purple-500/30 hover:border-purple-500/60',
    bg: color === 'cyan' ? 'from-cyan-500/10' : 
        color === 'green' ? 'from-green-500/10' : 'from-purple-500/10',
    text: color === 'cyan' ? 'text-cyan-400' : 
          color === 'green' ? 'text-green-400' : 'text-purple-400',
    pill: color === 'cyan' ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' : 
          color === 'green' ? 'bg-green-500/10 text-green-300 border-green-500/20' : 
          'bg-purple-500/10 text-purple-300 border-purple-500/20'
  });

  return (
    <section id="skills" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-cyan-400 font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Core Skills</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative p-6 rounded-2xl bg-gray-800/20 border ${colors.border} backdrop-blur-sm transition-all duration-300`}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <h3 className={`text-lg font-semibold mb-4 ${colors.text}`}>
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${colors.pill} transition-all duration-300`}
                        >
                          {skill}
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