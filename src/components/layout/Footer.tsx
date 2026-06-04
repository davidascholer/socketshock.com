import { motion } from "framer-motion";
import {
  Lightning,
  TwitterLogo,
  LinkedinLogo,
  GithubLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";

type Page = "home" | "signin" | "privacy" | "terms";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    // product: [
    //   { label: 'Features', href: '#features' },
    //   { label: 'Pricing', href: '#' },
    //   { label: 'Integrations', href: '#' },
    //   { label: 'API', href: '#' },
    // ],
    // company: [
    //   { label: 'About Us', href: '#' },
    //   { label: 'Careers', href: '#' },
    //   { label: 'Blog', href: '#' },
    //   { label: 'Press', href: '#' },
    // ],
    // resources: [
    //   { label: 'Documentation', href: '#' },
    //   { label: 'Help Center', href: '#' },
    //   { label: 'Community', href: '#' },
    //   { label: 'Status', href: '#' },
    // ],
    legal: [
      { label: "Privacy Policy", page: "privacy" as Page },
      { label: "Terms of Service", page: "terms" as Page },
      { label: "Cookie Policy", page: "privacy" as Page },
      // { label: 'GDPR', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: TwitterLogo, label: "Twitter", href: "#" },
    { icon: LinkedinLogo, label: "LinkedIn", href: "#" },
    { icon: GithubLogo, label: "GitHub", href: "#" },
    { icon: EnvelopeSimple, label: "Email", href: "#" },
  ];

  return (
    <footer className="relative border-t border-border dark-section">
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.55_0.07_180)] via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-16">
        <div className="flex flex-row items-center justify-center gap-8 md:gap-16">
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Lightning className="w-5 h-5 text-primary" weight="fill" />
                </div>
                <span className="brand-wordmark font-bold text-xl text-foreground">
                  SocketShock
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Build faster, ship smarter. The complete platform for modern
                development.
              </p>
            </motion.div>

            {/* <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-muted/50 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div> */}
          </div>

          {Object.entries(footerLinks).map(
            ([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h4 className="font-heading font-semibold text-foreground mb-4 capitalize">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link: any) => (
                    <li key={link.label} className="flex flex-row flex-nowrap">
                      {"page" in link ? (
                        <button
                          onClick={() => onNavigate(link.page || "home")}
                          className="text-muted-foreground hover:text-secondary text-sm transition-colors cursor-pointer"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary text-sm transition-colors"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} SocketShock. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
