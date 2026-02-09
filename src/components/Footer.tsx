import { Linkedin, Instagram, Globe } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/ieee-gst/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/ieeesiesgst/', label: 'Instagram' },
  { icon: Globe, href: 'https://ieeesiesgst.siesgst.edu.in/', label: 'Website' },
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
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <span className="text-2xl font-bold text-primary">ε</span>
              <span className="text-lg font-semibold text-foreground tracking-wide">
                EPSILON 2026
              </span>
            </div>
            <p className="text-muted-foreground text-xs">
              IEEE SIES GST Student Branch
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-xs uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-border/50 bg-secondary/30 flex items-center justify-center hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
              >
                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border/30 my-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-muted-foreground text-xs">
            © 2026 EPSILON. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Powered by <span className="text-primary">IEEE Student Branch</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
