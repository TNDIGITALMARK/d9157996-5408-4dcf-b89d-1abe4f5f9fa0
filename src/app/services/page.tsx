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
    <div className="min-h-screen bg-background text-foreground">
      <AIBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 surface-elevated rounded-full mb-8">
              <Sparkles size={14} strokeWidth={2.5} className="text-primary" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide">AI-Powered Automation Services</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              <span className="gradient-text">Our Services</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
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
      <section className="relative py-24 px-6 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Our Process</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to building your custom AI automation solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-6 surface-elevated rounded-lg hover:-translate-y-1 transition-all hover:shadow-md"
              >
                <div className="text-5xl font-bold text-primary/20 mb-3">{step.number}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2.5 transform -translate-y-1/2">
                    <ArrowRight className="text-primary/30" size={20} strokeWidth={2.5} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center p-8 bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-base text-muted-foreground mb-6">
              Let's discuss how AI automation can transform your business operations
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all hover:-translate-y-0.5 shadow-sm"
            >
              Get a Free Consultation
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
