import React from 'react';
import { 
  Shield, 
  Database, 
  FileCheck, 
  BookOpen, 
  MessageSquare, 
  BarChart3 
} from 'lucide-react';

export function FeatureSection() {
  const features = [
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "Regulatory Database",
      description: "Access our comprehensive, up-to-date database of global regulations",
      details: [
        "Real-time updates on regulatory changes",
        "Coverage across 100+ jurisdictions",
        "Searchable database of compliance requirements",
        "Industry-specific regulation tracking"
      ]
    },
    {
      icon: <FileCheck className="w-12 h-12 text-blue-600" />,
      title: "Compliance Check Tool",
      description: "Automated compliance assessment and risk monitoring",
      details: [
        "Instant compliance gap analysis",
        "Custom risk assessment reports",
        "Automated compliance monitoring",
        "Real-time violation alerts"
      ]
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: "Custom Compliance Playbook",
      description: "Personalized compliance guides tailored to your business",
      details: [
        "Step-by-step compliance instructions",
        "Customized action plans",
        "Deadline tracking and reminders",
        "Progress monitoring dashboard"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Document Generation",
      description: "AI-powered legal document creation and management",
      details: [
        "Automated policy generation",
        "Smart template library",
        "Version control system",
        "Compliance document audit trail"
      ]
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-blue-600" />,
      title: "Consultation Services",
      description: "Expert guidance when you need it most",
      details: [
        "On-demand expert consultation",
        "Live chat support",
        "Regular compliance reviews",
        "Training and workshops"
      ]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: "Compliance Dashboard",
      description: "Comprehensive overview of your compliance status",
      details: [
        "Real-time compliance metrics",
        "Risk assessment scores",
        "Upcoming deadline alerts",
        "Historical compliance tracking"
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
          Powerful Features for Complete Compliance Management
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
              <ul className="space-y-3">
                {feature.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1.5">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}