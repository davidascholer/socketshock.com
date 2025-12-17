import { motion } from 'framer-motion'
import {
  Lightning,
  Rocket,
  ShieldCheck,
  Globe,
  Flask,
  GitBranch,
  Layout,
  Cloud,
  Robot,
  Plugs,
  Lock,
  Wrench,
  ChartLine,
  Kanban,
  PaintBrush,
  Database,
  CurrencyDollar,
  ArrowRight,
  Quotes,
  Star,
  Check,
  Crown,
  Buildings,
} from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

type Page = 'home' | 'signin' | 'privacy' | 'terms'

interface LandingPageProps {
  onNavigate: (page: Page) => void
}

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechScale Inc.',
    avatar: 'SC',
    rating: 5,
    quote: 'NexusFlow transformed our deployment pipeline. What used to take hours now happens in minutes. The CI/CD integration is absolutely seamless.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Lead Developer',
    company: 'CloudNine Solutions',
    avatar: 'MJ',
    rating: 5,
    quote: 'The AI integration features are game-changing. We built intelligent features into our app that would have taken months to develop from scratch.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Engineering Manager',
    company: 'DataFlow Systems',
    avatar: 'ER',
    rating: 5,
    quote: 'Best developer experience I\'ve encountered. The UI building tools and analytics dashboards give us real-time insights that drive decisions.',
  },
  {
    name: 'David Park',
    role: 'Founder & CEO',
    company: 'Startup Forge',
    avatar: 'DP',
    rating: 5,
    quote: 'As a startup, speed is everything. NexusFlow let us ship our MVP in weeks instead of months. The competitive pricing made it a no-brainer.',
  },
  {
    name: 'Aisha Patel',
    role: 'Senior Architect',
    company: 'Enterprise Logic',
    avatar: 'AP',
    rating: 5,
    quote: 'Security was our top concern. NexusFlow\'s authentication system and encryption standards exceeded our enterprise compliance requirements.',
  },
  {
    name: 'James Morrison',
    role: 'VP of Engineering',
    company: 'ScaleUp Tech',
    avatar: 'JM',
    rating: 5,
    quote: 'The project management tools and progress reports keep our entire team aligned. We\'ve cut meeting time in half while improving output quality.',
  },
]

const features = [
  { icon: CurrencyDollar, title: 'Competitive Rates', description: 'Enjoy transparent, flexible pricing models designed to scale seamlessly with your business. No hidden fees or surprise charges—just straightforward costs that make budgeting simple and predictable for teams of any size.' },
  { icon: Rocket, title: 'Speed', description: 'Experience lightning-fast development cycles that get your products to market faster than ever. Our optimized workflows and intelligent automation cut deployment times by up to 70%, giving you a competitive edge.' },
  { icon: Lightning, title: 'Quality', description: 'Deliver enterprise-grade code backed by rigorous quality assurance processes. Every line is reviewed, tested, and optimized to meet the highest industry standards, ensuring reliability your users can count on.' },
  { icon: ShieldCheck, title: 'Security', description: 'Protect your applications with bank-level security protocols, end-to-end encryption, and comprehensive vulnerability scanning. Rest easy knowing your data and your users are safeguarded by industry-leading practices.' },
  { icon: Globe, title: 'Content Distribution', description: 'Leverage our global CDN infrastructure spanning 200+ edge locations worldwide. Deliver content blazingly fast to users anywhere on the planet with sub-50ms latency and 99.99% uptime guaranteed.' },
  { icon: Flask, title: 'Testing', description: 'Ship with confidence using our comprehensive automated testing suites. From unit tests to end-to-end integration testing, catch bugs before they reach production and maintain code quality at scale.' },
  { icon: GitBranch, title: 'CI/CD', description: 'Streamline your entire development pipeline with seamless continuous integration and deployment. Automate builds, tests, and releases to deliver updates faster while maintaining rock-solid stability.' },
  { icon: GitBranch, title: 'Professional Git Repos', description: 'Collaborate effectively with best-in-class version control workflows. Enjoy advanced branching strategies, code review tools, and seamless integrations that keep your team aligned and productive.' },
  { icon: Layout, title: 'Beautiful UI', description: 'Create stunning, pixel-perfect interfaces that users love and remember. Our design systems and component libraries empower you to build visually impressive applications without sacrificing performance.' },
  { icon: Cloud, title: 'Backend Services', description: 'Build on scalable, resilient infrastructure that grows effortlessly with your user base. From serverless functions to containerized microservices, we provide the foundation for your most ambitious projects.' },
  { icon: Robot, title: 'AI Integration', description: 'Harness cutting-edge artificial intelligence and machine learning capabilities directly in your applications. From natural language processing to predictive analytics, unlock powerful AI-driven features with ease.' },
  { icon: Plugs, title: 'OpenAPI Spec', description: 'Document and standardize your APIs using the industry-standard OpenAPI specification. Generate interactive documentation, client SDKs, and maintain consistency across all your API endpoints effortlessly.' },
  { icon: Lock, title: 'Authentication', description: 'Implement secure, flexible user authentication with support for SSO, OAuth 2.0, MFA, and social logins. Manage user identities confidently with built-in security features and compliance-ready infrastructure.' },
  { icon: Wrench, title: 'Plugin Ecosystem', description: 'Connect seamlessly to hundreds of your favorite services and APIs through our extensive plugin marketplace. Extend functionality, automate workflows, and integrate third-party tools with just a few clicks.' },
]

const internalTools = [
  { icon: ChartLine, title: 'Analytics Visualizations', description: 'Real-time insights and beautiful dashboards to track every metric that matters' },
  { icon: Kanban, title: 'Project Management', description: 'Comprehensive project tracking with up-to-date progress reports and team collaboration' },
  { icon: PaintBrush, title: 'UI Building Tools', description: 'Drag-and-drop customization tools to create your perfect interface' },
  { icon: Database, title: 'Data Management', description: 'Powerful data solutions for organizing, querying, and analyzing your information' },
]

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small projects getting started',
    price: 29,
    period: 'month',
    icon: Rocket,
    popular: false,
    features: [
      'Up to 3 projects',
      '5GB storage',
      'Basic CI/CD pipeline',
      'Community support',
      'Standard analytics',
      'Email notifications',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Professional',
    description: 'Ideal for growing teams that need more power and flexibility',
    price: 99,
    period: 'month',
    icon: Crown,
    popular: true,
    features: [
      'Unlimited projects',
      '100GB storage',
      'Advanced CI/CD with parallelization',
      'Priority support (24hr response)',
      'Advanced analytics & reports',
      'Custom integrations',
      'Team collaboration tools',
      'API access',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations with complex needs',
    price: null,
    period: 'month',
    icon: Buildings,
    popular: false,
    features: [
      'Everything in Professional',
      'Unlimited storage',
      'Dedicated infrastructure',
      'SLA guarantees (99.99% uptime)',
      '24/7 dedicated support',
      'Custom security policies',
      'On-premise deployment option',
      'Advanced audit logs',
      'SSO & SAML integration',
    ],
    cta: 'Contact Sales',
  },
]

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="relative">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 right-10 md:right-20"
        >
          <div className="w-20 h-20 md:w-32 md:h-32 rounded-2xl bg-primary/20 animate-float" style={{ animationDelay: '0s' }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-32 left-10 md:left-32"
        >
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-accent/20 animate-float" style={{ animationDelay: '2s' }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute top-40 left-20"
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary/15 animate-float" style={{ animationDelay: '4s' }} />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 15, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Lightning className="w-4 h-4 text-primary" weight="fill" />
              <span className="text-sm font-medium text-primary">Launching the future of development</span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight"
          >
            Build Faster.{' '}
            <span className="gradient-text">Ship Smarter.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            The complete platform for modern development teams. From backend services to beautiful UIs, 
            we've got everything you need to build, test, and deploy at scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => onNavigate('signin')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-effect gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 text-foreground px-8 py-6 text-lg"
              >
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 md:mt-24"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12 gradient-border glow-effect">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '99.9%', label: 'Uptime SLA' },
                  { value: '500K+', label: 'Deployments' },
                  { value: '150ms', label: 'Avg Response' },
                  { value: '24/7', label: 'Support' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="font-heading font-bold text-3xl md:text-4xl gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
              Everything You Need to{' '}
              <span className="gradient-text">Build & Scale</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive suite of tools and services designed for modern development workflows
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
              >
                <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:border-primary/40 gradient-border text-center flex flex-col items-center">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
                  >
                    <feature.icon className="w-7 h-7 text-primary" weight="duotone" />
                  </motion.div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', damping: 15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <Wrench className="w-4 h-4 text-accent" weight="fill" />
              <span className="text-sm font-medium text-accent">Internal Tools</span>
            </motion.div>
            
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
              Powerful{' '}
              <span className="gradient-text">Internal Tools</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Take control of your projects with our suite of internal tools designed for maximum efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internalTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="glass-card rounded-3xl p-8 h-full transition-all duration-300 hover:border-primary/40 gradient-border glow-effect">
                  <div className="flex items-start gap-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0"
                    >
                      <tool.icon className="w-8 h-8 text-primary" weight="duotone" />
                    </motion.div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                        {tool.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', damping: 15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Quotes className="w-4 h-4 text-primary" weight="fill" />
              <span className="text-sm font-medium text-primary">Customer Stories</span>
            </motion.div>

            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
              Trusted by{' '}
              <span className="gradient-text">Industry Leaders</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See what developers and teams around the world are saying about NexusFlow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:border-primary/40 gradient-border relative">
                  <Quotes 
                    className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" 
                    weight="fill" 
                  />
                  
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400" weight="fill" />
                    ))}
                  </div>

                  <p className="text-foreground/90 leading-relaxed mb-6 text-sm">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
        <div className="absolute top-1/3 right-1/6 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/6 w-56 h-56 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', damping: 15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <CurrencyDollar className="w-4 h-4 text-primary" weight="fill" />
              <span className="text-sm font-medium text-primary">Simple Pricing</span>
            </motion.div>

            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
              Plans That{' '}
              <span className="gradient-text">Scale With You</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Start free and upgrade as your needs grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: plan.popular ? 1.02 : 1.01 }}
                className={`group relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                  >
                    <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </motion.div>
                )}
                
                <div className={`glass-card rounded-3xl p-8 h-full transition-all duration-300 gradient-border relative overflow-hidden ${
                  plan.popular 
                    ? 'border-primary/50 glow-effect bg-gradient-to-b from-primary/5 to-transparent' 
                    : 'hover:border-primary/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                  )}
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          plan.popular 
                            ? 'bg-gradient-to-br from-primary to-accent' 
                            : 'bg-primary/10'
                        }`}
                      >
                        <plan.icon 
                          className={`w-6 h-6 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} 
                          weight="duotone" 
                        />
                      </motion.div>
                      <h3 className="font-heading font-bold text-xl text-foreground">
                        {plan.name}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-sm mb-6 min-h-[40px]">
                      {plan.description}
                    </p>

                    <div className="mb-6">
                      {plan.price !== null ? (
                        <div className="flex items-baseline gap-1">
                          <span className="font-heading font-bold text-4xl md:text-5xl gradient-text">
                            ${plan.price}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            /{plan.period}
                          </span>
                        </div>
                      ) : (
                        <div className="font-heading font-bold text-3xl md:text-4xl gradient-text">
                          Custom
                        </div>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + featureIndex * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <Check 
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              plan.popular ? 'text-primary' : 'text-muted-foreground'
                            }`} 
                            weight="bold" 
                          />
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={() => onNavigate('signin')}
                        className={`w-full py-6 font-semibold ${
                          plan.popular
                            ? 'bg-primary hover:bg-primary/90 text-primary-foreground glow-effect'
                            : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border/50'
                        }`}
                      >
                        {plan.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center text-muted-foreground text-sm mt-10"
          >
            All plans include a 14-day free trial. No credit card required.
          </motion.p>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
        
        <div className="relative mx-auto max-w-4xl px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
              Ready to{' '}
              <span className="gradient-text">Transform</span>
              {' '}Your Development?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of teams who have already accelerated their development workflow with NexusFlow
            </p>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => onNavigate('signin')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg glow-effect gap-2"
              >
                Start Building Today
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
