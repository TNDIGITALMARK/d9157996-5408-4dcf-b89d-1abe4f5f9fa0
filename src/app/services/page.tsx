export const dynamic = 'force-dynamic';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AIBackground } from '@/components/AIBackground';
import { ServiceCard } from '@/components/ServiceCard';
import { FileSpreadsheet, Database, Phone, Mail, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: FileSpreadsheet,
      title: 'Excel AI Bots',
      description: 'Intelligent bots that analyze work hours, calculate salaries, and automatically generate payroll documents with precision.',
      stats: 'Save 15 hours per week',
      features: [
        'Automated work hour analysis and tracking',
        'Intelligent salary calculations with tax compliance',
        'Automatic payroll document generation',
        'Integration with existing Excel workflows',
        'Real-time error detection and correction',
      ],
      gradient: 'bg-gradient-to-br from-green-500 to-emerald-600',
    },
    {
      icon: Database,
      title: 'CRM Management Bots',
      description: 'Smart automation that updates and manages client relationships automatically, keeping your CRM pristine and actionable.',
      stats: '100+ records updated daily',
      features: [
        'Automatic client data synchronization',
        'Intelligent lead scoring and prioritization',
        'Automated follow-up scheduling',
        'Cross-platform CRM integration',
        '99.9% data accuracy guarantee',
      ],
      gradient: 'bg-gradient-to-br from-primary to-blue-600',
    },
    {
      icon: Phone,
      title: 'Voice AI Assistants',
      description: 'Natural conversation bots that answer phone calls, check active calendars, and schedule appointments for restaurants, studios, and more.',
      stats: '200+ calls handled daily',
      features: [
        'Natural language understanding',
        'Real-time calendar integration',
        'Multi-language support available',
        'Appointment scheduling and confirmation',
        'Custom voice personality options',
      ],
      gradient: 'bg-gradient-to-br from-purple-500 to-violet-600',
    },
    {
      icon: Mail,
      title: 'Email Automation',
      description: 'Contextual AI that sends personalized emails or replies automatically based on user needs, maintaining your brand voice.',
      stats: '1000+ emails processed daily',
      features: [
        'Context-aware email composition',
        'Personalization at scale',
        'Brand voice consistency',
        'Smart categorization and routing',
        'Integration with major email platforms',
      ],
      gradient: 'bg-gradient-to-br from-orange-500 to-red-500',
    },
    {
      icon: Sparkles,
      title: 'Custom AI Solutions',
      description: 'If you can imagine it, we can build it. Previous builds include inventory management, legal document processors, and more.',
      stats: 'Unlimited possibilities',
      features: [
        'Fully tailored to your specific needs',
        'Integration with any existing system',
        'Scalable architecture for growth',
        'Ongoing optimization and support',
        'Complete documentation and training',
      ],
      gradient: 'bg-gradient-to-br from-accent to-pink-500',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: 'We learn about your business processes, pain points, and automation goals.',
    },
    {
      number: '02',
      title: 'Custom Design',
      description: 'Our team designs a tailored AI solution that integrates seamlessly with your workflow.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'We build and train your custom bot with rigorous testing for accuracy and reliability.',
    },
    {
      number: '04',
      title: 'Integration & Launch',
      description: 'Smooth deployment into your systems with full training and ongoing support.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <AIBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm text-white/80">AI-Powered Automation Services</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Our Services</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
              From Excel automation to voice AI assistants, we build intelligent solutions
              that transform your business operations and save you time and money.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                stats={service.stats}
                features={service.features}
                gradient={service.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-black to-deep-charcoal">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Process</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A streamlined approach to building your custom AI automation solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-8 bg-card border border-white/10 rounded-2xl hover:scale-105 transition-all shadow-md hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-primary/40" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-br from-primary/20 to-accent/20 border border-white/20 rounded-3xl backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss how AI automation can transform your business operations
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black hover:bg-white/90 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Get a Free Consultation
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
