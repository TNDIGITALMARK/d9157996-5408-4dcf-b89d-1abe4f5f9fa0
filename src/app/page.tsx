export const dynamic = 'force-dynamic';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AIBackground } from '@/components/AIBackground';
import Link from 'next/link';
import Image from 'next/image';
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
    <div className="min-h-screen bg-black text-white">
      <AIBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm text-white/80">Elite AI Development Team</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Transform Your Business</span>
              <br />
              <span className="text-white">with KREATIVA AI automations</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Elite AI developers building custom agents that automate your most critical business processes
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-xl font-semibold transition-all hover:scale-105 backdrop-blur-sm flex items-center gap-2"
              >
                Build Your AI Bot
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-xl font-semibold transition-all hover:scale-105 backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Mission</span>
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              We help companies save time and money through AI-driven automation.
              We build chatbots that seamlessly integrate into their existing workflows and tools,
              delivering enterprise-grade results with boutique-level attention.
            </p>
          </div>

          {/* Team Section */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
              <Users size={16} className="text-accent" />
              <span className="text-sm text-white/80">Meet The Team</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">Elite Developers</h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              Three specialized AI experts with decades of combined experience in automation and machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group p-8 bg-card border border-white/10 rounded-2xl hover:scale-105 transition-all shadow-md hover:shadow-lg hover:shadow-primary/20"
              >
                {member.name === 'Klemen Vrhunec' ? (
                  <div className="w-20 h-20 rounded-full mx-auto mb-6 overflow-hidden shadow-glow-blue relative">
                    <Image
                      src="/klemen-vrhunec.jpeg"
                      alt="Klemen Vrhunec"
                      width={80}
                      height={80}
                      className="object-cover object-center w-full h-full"
                      priority
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold shadow-glow-blue">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-white/60 mb-3">{member.experience}</p>
                <p className="text-sm text-white/70">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="relative py-32 px-6 bg-gradient-to-b from-black to-deep-charcoal">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
              <TrendingUp size={16} className="text-primary" />
              <span className="text-sm text-white/80">Proven Results</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Real businesses, real results. See how our AI automation solutions transform operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-white/10 rounded-2xl hover:scale-105 transition-all shadow-md hover:shadow-lg hover:shadow-primary/20 group"
              >
                <div className="mb-6">
                  <div className="text-sm text-accent font-semibold mb-2">{study.company}</div>
                  <h4 className="text-xl font-bold mb-4">{study.solution}</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold">{study.result}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-white/60">{study.impact}</p>
                  </div>
                </div>
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              If you can imagine it, we can build it. Let's create your custom AI solution.
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
