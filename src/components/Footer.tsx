'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'Github' },
    { icon: Mail, href: 'mailto:hello@kreativa.ai', label: 'Email' },
  ];

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/#about' },
        { label: 'Services', href: '/services' },
        { label: 'Case Studies', href: '/#case-studies' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Excel AI Bots', href: '/services#excel' },
        { label: 'CRM Management', href: '/services#crm' },
        { label: 'Voice AI', href: '/services#voice' },
        { label: 'Email Automation', href: '/services#email' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Get a Quote', href: '/contact' },
        { label: 'Schedule Call', href: '/contact#schedule' },
        { label: 'Support', href: '/contact#support' },
      ],
    },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-glow-blue">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-xl font-bold">
                KREATIVA AI
              </span>
            </div>
            <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
              Elite AI developers building custom intelligent chatbots that transform business operations through seamless automation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-105 backdrop-blur-sm"
                >
                  <social.icon size={18} className="text-white/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} KREATIVA AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
