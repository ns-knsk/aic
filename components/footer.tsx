import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  legal: [
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  company: [{ label: "About OptraHEALTH", href: "https://optrahealth.com", external: true }],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 relative">
                <Image
                  src="/aicounsyl-logo.png"
                  alt="AiCounsyl Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl text-foreground">AiCounsyl</span>
            </div>
            <p className="text-sm font-medium text-foreground">
              From{" "}
              <a
                href="https://optrahealth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                OptraHEALTH
              </a>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Explaining cardiac and pathology reports in simple language. Empowering patients with clear health
              insights.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
                  >
                    <Icon className="h-4 w-4 text-muted-foreground hover:text-primary" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-border pt-8 space-y-4">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-4xl">
            <strong className="text-foreground">Important:</strong> AiCounsyl is not a substitute for professional
            medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health
            provider with any questions you may have regarding a medical condition. Never disregard professional medical
            advice or delay in seeking it because of something you have read in this app. If you think you may have a
            medical emergency, call your doctor or emergency services immediately.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} OptraHEALTH. All rights reserved.</p>
            <p>HIPAA Compliant | SOC 2 Type II Certified</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
