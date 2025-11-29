import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, GitBranch, Shield, Container, Activity } from 'lucide-react';

export default function CloudStackSection() {
  const stacks = [
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      color: 'cyan',
      items: [
        { name: 'AWS', detail: 'S3, ECR, EKS, Lambda, CloudWatch, Step Functions' },
        { name: 'Azure', detail: 'AKS, ACR, AML, Monitor' },
        { name: 'GCP', detail: 'GKE, Pub/Sub, BigQuery, Vertex AI' }
      ]
    },
    {
      title: 'Infrastructure as Code',
      icon: Server,
      color: 'green',
      items: [
        { name: 'Terraform', detail: 'Multi-cloud provisioning' },
        { name: 'CloudFormation', detail: 'AWS native IaC' },
        { name: 'Pulumi', detail: 'Programming language IaC' },
        { name: 'Helm', detail: 'Kubernetes packaging' }
      ]
    },
    {
      title: 'Containers & Orchestration',
      icon: Container,
      color: 'purple',
      items: [
        { name: 'Docker', detail: 'Containerization' },
        { name: 'Kubernetes', detail: 'EKS/AKS/GKE' },
        { name: 'KServe', detail: 'ML model serving' },
        { name: 'ArgoCD', detail: 'GitOps deployment' }
      ]
    },
    {
      title: 'CI/CD & Automation',
      icon: GitBranch,
      color: 'cyan',
      items: [
        { name: 'GitHub Actions', detail: 'Workflow automation' },
        { name: 'Jenkins', detail: 'CI/CD pipelines' },
        { name: 'GitLab CI', detail: 'Integrated DevOps' },
        { name: 'Argo Workflows', detail: 'Kubernetes native' }
      ]
    },
    {
      title: 'Monitoring & Observability',
      icon: Activity,
      color: 'green',
      items: [
        { name: 'Prometheus', detail: 'Metrics collection' },
        { name: 'Grafana', detail: 'Visualization' },
        { name: 'ELK Stack', detail: 'Log management' },
        { name: 'OpenTelemetry', detail: 'Distributed tracing' }
      ]
    },
    {
      title: 'Security & Compliance',
      icon: Shield,
      color: 'purple',
      items: [
        { name: 'IAM & RBAC', detail: 'Access control' },
        { name: 'VPC & Network', detail: 'Network security' },
        { name: 'TLS/SSL', detail: 'Encryption in transit' },
        { name: 'Config Rules', detail: 'Compliance checks' }
      ]
    }
  ];

  const getColorClasses = (color) => ({
    border: color === 'cyan' ? 'border-cyan-500/20 group-hover:border-cyan-500/40' : 
            color === 'green' ? 'border-green-500/20 group-hover:border-green-500/40' : 
            'border-purple-500/20 group-hover:border-purple-500/40',
    icon: color === 'cyan' ? 'text-cyan-400 bg-cyan-500/10' : 
          color === 'green' ? 'text-green-400 bg-green-500/10' : 
          'text-purple-400 bg-purple-500/10',
    glow: color === 'cyan' ? 'shadow-cyan-500/20' : 
          color === 'green' ? 'shadow-green-500/20' : 
          'shadow-purple-500/20'
  });

  return (
    <section id="cloud-stack" className="relative py-32 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-cyan-400 font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">MLOps & Cloud Stack</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
          </div>
          
          <p className="text-gray-400 max-w-2xl mb-16">
            The complete toolset I use to build, deploy, and maintain production ML systems at scale.
          </p>

          {/* Stack grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stacks.map((stack, index) => {
              const colors = getColorClasses(stack.color);
              const Icon = stack.icon;
              return (
                <motion.div
                  key={stack.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative p-6 rounded-2xl bg-gray-800/30 border ${colors.border} backdrop-blur-sm transition-all duration-500 hover:shadow-lg ${colors.glow}`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl ${colors.icon}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{stack.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {stack.items.map((item) => (
                      <div key={item.name} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2 flex-shrink-0" />
                        <div>
                          <span className="text-gray-200 font-medium text-sm">{item.name}</span>
                          <span className="text-gray-500 text-sm ml-2">— {item.detail}</span>
                        </div>
                      </div>
                    ))}
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