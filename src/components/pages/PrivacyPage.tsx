import { motion } from 'framer-motion'
import { ShieldCheck } from '@phosphor-icons/react'

export default function PrivacyPage() {
  const lastUpdated = 'January 1, 2024'

  const sections = [
    {
      title: 'Information We Collect',
      content: `We collect information you provide directly to us, such as when you create an account, submit a contact form, or communicate with us. This includes your name, email address, company name, and project details.

We also automatically collect certain information when you visit our website, including:
• Device information (browser type, operating system)
• Log information (access times, pages viewed, IP address)
• Cookie data for analytics and functionality purposes`,
    },
    {
      title: 'How We Use Cookies',
      content: `We use cookies and similar tracking technologies to:
• Analyze website traffic and usage patterns
• Remember your preferences and settings
• Improve our website performance and user experience
• Understand how visitors interact with our content

Our cookies are used solely for analytical purposes. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.`,
    },
    {
      title: 'Data Protection',
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
• Encryption of data in transit and at rest
• Regular security assessments
• Access controls and authentication
• Secure data centers with 24/7 monitoring`,
    },
    {
      title: 'Your Privacy Rights',
      content: `You have the right to:
• Access the personal information we hold about you
• Request correction of inaccurate data
• Request deletion of your data
• Opt-out of marketing communications
• Disable cookies through your browser settings

Note that disabling cookies may affect the functionality of our website.`,
    },
    {
      title: 'Third-Party Services',
      content: `We may use third-party services for analytics and website functionality. These services may collect information sent by your browser as part of a web page request. They are bound by their own privacy policies and we encourage you to review them.

We do not share your personal information with third parties for their marketing purposes.`,
    },
    {
      title: 'Data Retention',
      content: `We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements.

Analytics data is retained in an anonymized format and cannot be used to identify individual users.`,
    },
    {
      title: 'Changes to This Policy',
      content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.

Your continued use of our website after any changes indicates your acceptance of the updated policy.`,
    },
    {
      title: 'Contact Us',
      content: `If you have any questions about this Privacy Policy or our data practices, please contact us at:

Email: privacy@nexusflow.dev
Address: 123 Innovation Way, Tech City, TC 12345

We will respond to your inquiry within 30 business days.`,
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-primary" weight="fill" />
            <span className="text-sm font-medium text-primary">Privacy Policy</span>
          </motion.div>
          
          <h1 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg">
            Last updated: {lastUpdated}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 md:p-12 gradient-border"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At NexusFlow, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <div className="space-y-10">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <h2 className="font-heading font-semibold text-xl text-foreground mb-4">
                    {section.title}
                  </h2>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
