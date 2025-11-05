export const dynamic = 'force-dynamic';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AIBackground } from '@/components/AIBackground';
import Link from 'next/link';
import { ArrowRight, Sparkles, Users, CheckCircle2, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const stats = [
    { value: '100+', label: 'Automations Built' },
    { value: '99.9%', label: 'Accuracy Rate' },
    { value: '10hrs', label: 'Avg. Time Saved/Week' },
    { value: '3', label: 'Elite Developers' },
  ];

  const caseStudies = [
    {
      company: 'Restaurant Chain',
      solution: 'Voice AI Assistant',
      result: '85% reduction in missed reservations',
      impact: '300+ daily calls handled',
    },
    {
      company: 'Accounting Firm',
      solution: 'Excel AI Bot',
      result: 'Payroll time: 8hrs → 45min',
      impact: 'Weekly automation',
    },
    {
      company: 'Real Estate Agency',
      solution: 'CRM Management Bot',
      result: '40% conversion increase',
      impact: 'Automated lead nurturing',
    },
  ];

  const team = [
    {
      name: 'Val Rojko',
      role: 'Lead AI Architect',
      experience: 'Passionate about building smart automation systems that actually make life easier',
      expertise: 'Focus on AI logic, chatbot design, and practical NLP solutions',
    },
    {
      name: 'Klemen Vrhunec',
      role: 'Automation Specialist',
      experience: 'Enjoys connecting different tools and making them work together seamlessly',
      expertise: 'Focus on workflow automation and CRM integrations',
    },
    {
      name: 'Thor Frangež Križančič',
      role: 'ML Engineer',
      experience: 'Curious about how machines learn and make decisions',
      expertise: 'Works on neural networks, model tuning, and optimization',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AIBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 surface-elevated rounded-full mb-8">
              <Sparkles size={14} strokeWidth={2.5} className="text-primary" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide">Elite AI Development Team</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              <span className="gradient-text">Transform Your Business</span>
              <br />
              <span>with AI Automation</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Elite AI developers building custom agents that automate your most critical business processes
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                href="/contact"
                className="group px-6 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all hover:-translate-y-0.5 flex items-center gap-2 shadow-sm"
              >
                Build Your AI Bot
                <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group px-6 py-2.5 surface-elevated hover:bg-secondary text-foreground rounded-lg font-medium transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                Explore Services
                <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-5 surface-elevated rounded-lg animate-scale-in hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <div className="w-5 h-8 border border-border rounded-full flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-muted-foreground rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Our Mission</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              We help companies save time and money through AI-driven automation.
              We build chatbots that seamlessly integrate into their existing workflows and tools,
              delivering enterprise-grade results with boutique-level attention.
            </p>
          </div>

          {/* Team Section */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 surface-elevated rounded-full mb-6">
              <Users size={14} strokeWidth={2.5} className="text-accent" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide">Meet The Team</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Elite Developers</h3>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Three specialized AI experts with decades of combined experience in automation and machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="group p-6 surface-elevated rounded-lg hover:-translate-y-1 transition-all hover:shadow-md"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-5 flex items-center justify-center text-2xl font-bold shadow-glow">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="text-lg font-bold mb-1.5">{member.name}</h4>
                <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{member.experience}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="relative py-24 px-6 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 surface-elevated rounded-full mb-6">
              <TrendingUp size={14} strokeWidth={2.5} className="text-primary" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide">Proven Results</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Real businesses, real results. See how our AI automation solutions transform operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="p-6 surface-elevated rounded-lg hover:-translate-y-1 transition-all hover:shadow-md group"
              >
                <div className="mb-5">
                  <div className="text-xs text-accent font-semibold mb-2 uppercase tracking-wider">{study.company}</div>
                  <h4 className="text-lg font-bold mb-3">{study.solution}</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} strokeWidth={2.5} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">{study.result}</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-muted-foreground">{study.impact}</p>
                  </div>
                </div>
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-base text-muted-foreground mb-6">
              If you can imagine it, we can build it. Let's create your custom AI solution.
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
