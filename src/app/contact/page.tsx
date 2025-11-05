'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AIBackground } from '@/components/AIBackground';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        timeline: '',
        message: '',
      });
    }, 5000);
  };

  const services = [
    'Excel AI Bots',
    'CRM Management Bots',
    'Voice AI Assistants',
    'Email Automation',
    'Custom AI Solution',
  ];

  const budgetRanges = [
    '$0 - $5,000',
    '$5,000 - $15,000',
    '$15,000 - $30,000',
    '$30,000+',
    'Custom',
  ];

  const timelines = [
    'ASAP (1-2 weeks)',
    'Within a month',
    '1-3 months',
    'Flexible timeline',
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Enquire@kreativa-ai.com',
      href: 'mailto:Enquire@kreativa-ai.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+386 41 426 351',
      href: 'tel:+38641426351',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Maribor, Slovenia',
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AIBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              <span className="gradient-text">Get in Touch</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's discuss how we can automate your business processes and save you time and money
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              {isSubmitted ? (
                <div className="p-10 surface-elevated border-green-500/30 rounded-lg text-center animate-fade-in">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={32} strokeWidth={2.5} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
                  <p className="text-muted-foreground text-sm">
                    We've received your request and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 bg-input border border-border rounded-lg text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 bg-input border border-border rounded-lg text-sm"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-input border border-border rounded-lg text-sm"
                      placeholder="Your Company Inc."
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 bg-input border border-border rounded-lg text-sm"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-2">
                        Budget Range *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 bg-input border border-border rounded-lg text-sm"
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                        Project Timeline *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 bg-input border border-border rounded-lg text-sm"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>
                            {timeline}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3.5 py-2.5 bg-input border border-border rounded-lg text-sm resize-none"
                      placeholder="Tell us about your automation needs..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 py-2.5 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground rounded-lg font-medium transition-all hover:-translate-y-0.5 shadow-sm flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} strokeWidth={2.5} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info & Team */}
            <div className="order-1 lg:order-2 space-y-6">
              {/* Contact Information */}
              <div className="p-6 surface-elevated rounded-lg">
                <h3 className="text-xl font-bold mb-5">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start gap-3 group hover:translate-x-1 transition-transform"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                        <info.icon size={20} strokeWidth={2.5} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-0.5">{info.label}</div>
                        <div className="font-medium text-sm">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-lg">
                <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary-foreground">
                      1
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We review your request and schedule a discovery call within 24 hours
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary-foreground">
                      2
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Our team designs a custom solution tailored to your needs
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary-foreground">
                      3
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      You receive a detailed proposal with timeline and pricing
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 surface-elevated rounded-lg">
                <h3 className="text-lg font-bold mb-3">Availability</h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  Our team is available 24/7, every day of the week
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  For urgent inquiries, please call us directly or mention "urgent" in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
