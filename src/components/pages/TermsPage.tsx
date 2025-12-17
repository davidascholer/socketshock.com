import { motion } from 'framer-motion'
import { Scroll } from '@phosphor-icons/react'

export default function TermsPage() {
  const lastUpdated = 'January 1, 2024'

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing or using NexusFlow's services, website, or any related applications (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our Services.

These Terms apply to all visitors, users, and others who access or use the Services. By using the Services, you represent that you are at least 18 years of age and have the legal capacity to enter into these Terms.`,
    },
    {
      title: '2. Description of Services',
      content: `NexusFlow provides a software-as-a-service platform for development teams, including but not limited to:
• Backend service development and hosting
• Frontend development tools and frameworks
• API creation and management
• Project management and collaboration tools
• Analytics and reporting dashboards
• Security and authentication services

We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time, with or without notice.`,
    },
    {
      title: '3. User Accounts',
      content: `To access certain features of our Services, you must create an account. You agree to:
• Provide accurate, current, and complete information
• Maintain and promptly update your account information
• Keep your password confidential and secure
• Accept responsibility for all activities under your account
• Notify us immediately of any unauthorized access

We reserve the right to suspend or terminate accounts that violate these Terms or for any other reason at our sole discretion.`,
    },
    {
      title: '4. Acceptable Use Policy',
      content: `You agree not to use the Services to:
• Violate any applicable laws or regulations
• Infringe on intellectual property rights of others
• Transmit malware, viruses, or harmful code
• Attempt to gain unauthorized access to our systems
• Interfere with or disrupt the Services
• Engage in any activity that could damage our reputation
• Use the Services for any illegal or unauthorized purpose

We reserve the right to investigate and take appropriate action against any violations.`,
    },
    {
      title: '5. Intellectual Property',
      content: `The Services and all content, features, and functionality are owned by NexusFlow and are protected by copyright, trademark, and other intellectual property laws.

You retain ownership of any content you submit through the Services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content in connection with providing the Services.

Our name, logo, and all related names, logos, and product names are trademarks of NexusFlow. You may not use these marks without our prior written permission.`,
    },
    {
      title: '6. Payment and Billing',
      content: `Certain Services require payment of fees. By subscribing to paid Services, you agree to:
• Pay all applicable fees as described at the time of purchase
• Provide valid payment information
• Authorize us to charge your payment method
• Pay any applicable taxes

Fees are non-refundable except as required by law or as explicitly stated in our refund policy. We may change our fees upon 30 days' notice.`,
    },
    {
      title: '7. Service Level Agreement',
      content: `For paid subscriptions, we commit to:
• 99.9% uptime for production services
• Response times as specified in your service plan
• Regular backups of your data
• Security updates and maintenance

Service credits may be available for downtime exceeding our SLA commitments, as detailed in your service agreement.`,
    },
    {
      title: '8. Limitation of Liability',
      content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEXUSFLOW SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES.

Our total liability for any claims arising from your use of the Services shall not exceed the amount you paid us in the twelve months preceding the claim.`,
    },
    {
      title: '9. Disclaimer of Warranties',
      content: `THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

We do not warrant that the Services will be uninterrupted, error-free, or completely secure.`,
    },
    {
      title: '10. Indemnification',
      content: `You agree to indemnify, defend, and hold harmless NexusFlow and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:
• Your use of the Services
• Your violation of these Terms
• Your violation of any third-party rights
• Any content you submit through the Services`,
    },
    {
      title: '11. Termination',
      content: `Either party may terminate this agreement at any time. Upon termination:
• Your access to the Services will be suspended
• You remain responsible for any outstanding fees
• We may retain your data for a reasonable period for backup purposes
• Provisions that by their nature should survive will remain in effect

You may export your data before termination using our data export tools.`,
    },
    {
      title: '12. Governing Law',
      content: `These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.

Any disputes arising from these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.`,
    },
    {
      title: '13. Changes to Terms',
      content: `We reserve the right to modify these Terms at any time. We will provide notice of material changes through:
• Email notification to your registered address
• Prominent notice on our website
• In-app notifications

Your continued use of the Services after changes become effective constitutes acceptance of the modified Terms.`,
    },
    {
      title: '14. Contact Information',
      content: `For questions about these Terms of Service, please contact us at:

Email: legal@nexusflow.dev
Address: 123 Innovation Way, Tech City, TC 12345
Phone: (555) 123-4567

We will respond to inquiries within 5 business days.`,
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
          >
            <Scroll className="w-4 h-4 text-accent" weight="fill" />
            <span className="text-sm font-medium text-accent">Terms of Service</span>
          </motion.div>
          
          <h1 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
            Terms of Service
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
              Welcome to NexusFlow. Please read these Terms of Service carefully before using our platform. These terms govern your access to and use of our services, including our website, APIs, and all associated applications.
            </p>

            <div className="space-y-10">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
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
