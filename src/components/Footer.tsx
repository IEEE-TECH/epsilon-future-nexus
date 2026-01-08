import { Linkedin, Instagram, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'X (Twitter)' },
];

const footerLinks = [
  { name: 'About', href: '#about' },
  { name: 'Tracks', href: '#tracks' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Register', href: '#register' },
];

export const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border/30">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <span className="font-display text-3xl font-bold text-primary neon-text">ε</span>
              <span className="font-display text-xl font-semibold text-foreground tracking-wider">
                EPSILON 2026
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-2">
              IEEE Annual Flagship Technical Symposium
            </p>
            <p className="text-muted-foreground text-sm">
              Organized by IEEE SIES GST Student Branch
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-border/50 bg-secondary/30 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border/50 to-transparent my-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 EPSILON. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Powered by{' '}
            <span className="text-primary font-medium">IEEE Student Branch</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
