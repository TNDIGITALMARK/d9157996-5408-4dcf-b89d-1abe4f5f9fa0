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
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-base">AI</span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                KREATIVA AI
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-5 max-w-sm leading-relaxed">
              Elite AI developers building custom intelligent chatbots that transform business operations through seamless automation.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg surface-elevated hover:bg-secondary flex items-center justify-center transition-all hover:-translate-y-0.5"
                >
                  <social.icon size={16} strokeWidth={2.5} className="text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-3 text-sm">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
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
        <div className="pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-center items-center gap-3">
            <p className="text-muted-foreground text-xs">
              © {currentYear} KREATIVA AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
