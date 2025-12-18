import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
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
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import CodeBlockComponent from "../CodeBlockComponent";
import WorldMapComponent from "../WorldMapComponent";
import MacbookScrollComponent from "../MacbookScrollComponent";
import ParallaxScrollComponent from "../ParallaxScrollComponent";

type Page = "home" | "signin" | "privacy" | "terms";

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const layer1Y = useTransform(scrollYProgress, [0, 0.9], [0, -150]);
  const layer2Y = useTransform(scrollYProgress, [0, 0.9], [0, -250]);
  const layer3Y = useTransform(scrollYProgress, [0, 0.9], [0, -350]);
  const layer4Y = useTransform(scrollYProgress, [0, 0.9], [0, -100]);

  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

  const smoothLayer1 = useSpring(layer1Y, { stiffness: 50, damping: 20 });
  const smoothLayer2 = useSpring(layer2Y, { stiffness: 40, damping: 25 });
  const smoothLayer3 = useSpring(layer3Y, { stiffness: 30, damping: 30 });
  const smoothLayer4 = useSpring(layer4Y, { stiffness: 60, damping: 15 });

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity }}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      <motion.div
        style={{ y: smoothLayer1 }}
        className="absolute top-[10%] left-[5%] w-3 h-3 rounded-full bg-primary/20"
      />
      <motion.div
        style={{ y: smoothLayer2 }}
        className="absolute top-[15%] right-[10%] w-2 h-2 rounded-full bg-accent/30"
      />
      <motion.div
        style={{ y: smoothLayer3 }}
        className="absolute top-[25%] left-[15%] w-1.5 h-1.5 rounded-full bg-primary/25"
      />
      <motion.div
        style={{ y: smoothLayer1 }}
        className="absolute top-[35%] right-[20%] w-2.5 h-2.5 rounded-full bg-accent/20"
      />
      <motion.div
        style={{ y: smoothLayer4 }}
        className="absolute top-[45%] left-[8%] w-2 h-2 rounded-full bg-primary/15"
      />
      <motion.div
        style={{ y: smoothLayer2 }}
        className="absolute top-[55%] right-[5%] w-3 h-3 rounded-full bg-accent/25"
      />
      <motion.div
        style={{ y: smoothLayer3 }}
        className="absolute top-[65%] left-[12%] w-1.5 h-1.5 rounded-full bg-primary/20"
      />
      <motion.div
        style={{ y: smoothLayer1 }}
        className="absolute top-[75%] right-[15%] w-2 h-2 rounded-full bg-accent/15"
      />

      <motion.div
        style={{ y: smoothLayer2 }}
        className="absolute top-[20%] right-[25%] w-64 h-64 rounded-full bg-gradient-radial from-primary/8 to-transparent blur-3xl"
      />
      <motion.div
        style={{ y: smoothLayer3 }}
        className="absolute top-[40%] left-[10%] w-80 h-80 rounded-full bg-gradient-radial from-accent/6 to-transparent blur-3xl"
      />
      <motion.div
        style={{ y: smoothLayer1 }}
        className="absolute top-[60%] right-[8%] w-72 h-72 rounded-full bg-gradient-radial from-primary/5 to-transparent blur-3xl"
      />
      <motion.div
        style={{ y: smoothLayer4 }}
        className="absolute top-[80%] left-[20%] w-56 h-56 rounded-full bg-gradient-radial from-accent/7 to-transparent blur-3xl"
      />

      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.line
          style={{ y: smoothLayer4 }}
          x1="10%"
          y1="30%"
          x2="15%"
          y2="45%"
          stroke="oklch(0.62 0.08 180 / 0.08)"
          strokeWidth="1"
        />
        <motion.line
          style={{ y: smoothLayer2 }}
          x1="85%"
          y1="20%"
          x2="90%"
          y2="35%"
          stroke="oklch(0.70 0.12 180 / 0.06)"
          strokeWidth="1"
        />
        <motion.line
          style={{ y: smoothLayer3 }}
          x1="5%"
          y1="60%"
          x2="12%"
          y2="72%"
          stroke="oklch(0.62 0.08 180 / 0.07)"
          strokeWidth="1"
        />
        <motion.line
          style={{ y: smoothLayer1 }}
          x1="88%"
          y1="55%"
          x2="95%"
          y2="68%"
          stroke="oklch(0.70 0.12 180 / 0.05)"
          strokeWidth="1"
        />
      </svg>

      <motion.div
        style={{ y: smoothLayer2 }}
        className="absolute top-[18%] left-[3%]"
      >
        <div className="w-8 h-8 border border-primary/10 rounded-lg rotate-45" />
      </motion.div>
      <motion.div
        style={{ y: smoothLayer3 }}
        className="absolute top-[42%] right-[4%]"
      >
        <div className="w-6 h-6 border border-accent/10 rounded-full" />
      </motion.div>
      <motion.div
        style={{ y: smoothLayer1 }}
        className="absolute top-[68%] left-[6%]"
      >
        <div className="w-5 h-5 border border-primary/8 rotate-12">
          <div className="w-full h-full border-t border-l border-primary/8" />
        </div>
      </motion.div>
      <motion.div
        style={{ y: smoothLayer4 }}
        className="absolute top-[85%] right-[7%]"
      >
        <div className="w-7 h-7 border border-accent/8 rounded-lg -rotate-12" />
      </motion.div>
    </motion.div>
  );
}

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const numericPart = value.replace(/[^0-9.]/g, "");
      const prefix = value.replace(/[0-9.%+]/g, "");
      const target = parseFloat(numericPart) || 0;
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(prefix + Math.floor(current) + suffix);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value, suffix]);

  return <span ref={ref}>{displayValue}</span>;
}

function FloatingParticle({
  delay,
  x,
  y,
}: {
  delay: number;
  x: number;
  y: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        y: [0, -100],
        x: [0, Math.random() * 50 - 25],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
      }}
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <Lightning className="w-4 h-4 text-primary/40" weight="fill" />
    </motion.div>
  );
}

const testimonials = [
  {
    name: "Austin",
    role: "Cofounder - AI for Lawyers",
    avatar: "AB",
    rating: 5,
    quote:
      "Their work actually was astounding. I've worked with other front end, back end, or UI/UX developers. SocketShock worked so quickly, and with so much ease, I didn't know what to say. They not only worked fast, but their output was great. I cannot overstate how capable they are. They made work that was crushing some of my other developers look like a cake walk.",
  },
  {
    name: "Oshawa",
    role: "Politician",
    avatar: "OS",
    rating: 5,
    quote:
      "SocketShock was an absolute pleasure to work. They have a friendly demeanour and is easy to talk to. They genuinely cared about what I was looking for in this project, and sought to understand my objectives. I was involved throughout the process and they made sure to provide frequent updates, which were much appreciated. I was also pleasantly surprised with the extremely high quality of work they produced. Their skills in web design are top-notch, and I highly recommend them and their services.",
  },
  {
    name: "Ransel",
    role: "Director of Sales",
    avatar: "RW",
    rating: 5,
    quote:
      "I have over 30 years of experience managing people and processes, hiring and training and coaching individuals to fit into a team and building a sense of team through camaraderie and standards of excellence. David [founder] brought all of that naturally to the company, and I would hire him, work with him, or work for him if the opportunity ever arose. He's a great engineer who just happens to be a great human being as well!",
  },
  {
    name: "Yovonne",
    role: "Artist",
    avatar: "YD",
    rating: 5,
    quote:
      "SocketShock are the ones to hire; simply put, that’s all you need to know. They are the ones to hire. This is not my first contracted job, nor will it be the last, but SocketShock will be my immediate first thoughts for any future work. I normally don’t leave ratings because this is a job, and people should be doing their job, but for SocketShock, I will. In addition to receiving five stars for their rating, there is David [founder], the person. He is approachable and quick-thinking. When you’ve chosen SocketShock you’re choosing right.",
  },
];

const features = [
  {
    icon: CurrencyDollar,
    title: "Competitive Rates",
    description:
      "Enjoy transparent, flexible pricing models designed to scale seamlessly with your business. No hidden fees or surprise charges—just straightforward costs that make budgeting simple and predictable for teams of any size.",
  },
  {
    icon: Rocket,
    title: "Speed",
    description:
      "Experience lightning-fast development cycles that get your products to market faster than ever. Our optimized workflows and intelligent automation cut deployment times by up to 70%, giving you a competitive edge.",
  },
  {
    icon: Lightning,
    title: "Quality",
    description:
      "Deliver enterprise-grade code backed by rigorous quality assurance processes. Every line is reviewed, tested, and optimized to meet the highest industry standards, ensuring reliability your users can count on.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Protect your applications with bank-level security protocols, end-to-end encryption, and comprehensive vulnerability scanning. Rest easy knowing your data and your users are safeguarded by industry-leading practices.",
  },
  {
    icon: Globe,
    title: "Content Distribution",
    description:
      "Leverage our global CDN infrastructure spanning 200+ edge locations worldwide. Deliver content blazingly fast to users anywhere on the planet with sub-50ms latency and 99.99% uptime guaranteed.",
  },
  {
    icon: Flask,
    title: "Testing",
    description:
      "Ship with confidence using our comprehensive automated testing suites. From unit tests to end-to-end integration testing, catch bugs before they reach production and maintain code quality at scale.",
  },
  {
    icon: GitBranch,
    title: "CI/CD",
    description:
      "Streamline your entire development pipeline with seamless continuous integration and deployment. Automate builds, tests, and releases to deliver updates faster while maintaining rock-solid stability.",
  },
  {
    icon: GitBranch,
    title: "Professional Git Repos",
    description:
      "Collaborate effectively with best-in-class version control workflows. Enjoy advanced branching strategies, code review tools, and seamless integrations that keep your team aligned and productive.",
  },
  {
    icon: Layout,
    title: "Beautiful UI",
    description:
      "Create stunning, pixel-perfect interfaces that users love and remember. Our design systems and component libraries empower you to build visually impressive applications without sacrificing performance.",
  },
  {
    icon: Cloud,
    title: "Backend Services",
    description:
      "Build on scalable, resilient infrastructure that grows effortlessly with your user base. From serverless functions to containerized microservices, we provide the foundation for your most ambitious projects.",
  },
  {
    icon: Robot,
    title: "AI Integration",
    description:
      "Harness cutting-edge artificial intelligence and machine learning capabilities directly in your applications. From natural language processing to predictive analytics, unlock powerful AI-driven features with ease.",
  },
  {
    icon: Plugs,
    title: "OpenAPI Spec",
    description:
      "Document and standardize your APIs using the industry-standard OpenAPI specification. Generate interactive documentation, client SDKs, and maintain consistency across all your API endpoints effortlessly.",
  },
  {
    icon: Lock,
    title: "Authentication",
    description:
      "Implement secure, flexible user authentication with support for SSO, OAuth 2.0, MFA, and social logins. Manage user identities confidently with built-in security features and compliance-ready infrastructure.",
  },
  {
    icon: Wrench,
    title: "Plugin Ecosystem",
    description:
      "Connect seamlessly to hundreds of your favorite services and APIs through our extensive plugin marketplace. Extend functionality, automate workflows, and integrate third-party tools with just a few clicks.",
  },
];

const internalTools = [
  {
    icon: ChartLine,
    title: "Analytics Visualizations",
    description:
      "Real-time insights and beautiful dashboards to track every metric that matters",
  },
  {
    icon: Kanban,
    title: "Project Management",
    description:
      "Comprehensive project tracking with up-to-date progress reports and team collaboration",
  },
  {
    icon: PaintBrush,
    title: "UI Building Tools",
    description:
      "Drag-and-drop customization tools to create your perfect interface",
  },
  {
    icon: Database,
    title: "Data Management",
    description:
      "Powerful data solutions for organizing, querying, and analyzing your information",
  },
];

const pricingPlans = [
  {
    name: "Static Client Side Applications",
    description: "Perfect for individuals and small projects getting started.",
    price: 2000,
    period: "typical pricing*",
    // period: "average shipment in 2-5 days",
    icon: Rocket,
    popular: false,
    features: [
      "Static site generation",
      "Responsive design",
      "Basic SEO setup",
      "Access to internal tools",
      "Graphic design integration",
      "Performance optimization",
    ],
    cta: "Inquire About Static Applications",
  },
  {
    name: "Full Stack Applications",
    description:
      "For growing software needs that require an app, a server, and managed databases.",
    price: 5000,
    period: "typical pricing*",

    // period: "average shipment in 1-3 weeks",
    icon: Rocket,
    popular: false,
    features: [
      "All Static Client Side features",
      "SEO optimization",
      "Backend API development",
      "Database integration",
      "User authentication",
      "CI/CD pipeline setup",
    ],
    cta: "Inquire About Full Stack Systems",
  },
  {
    name: "Large Scale Enterprise Solutions",
    description:
      "For analytics dashboards, internal tools, complex systems integrations, and more.",
    price: 10000,
    period: "typical pricing*",

    // period: "average shipment in 2-5 weeks",
    icon: Rocket,
    popular: false,
    features: [
      "All Full Stack Application features",
      "Custom system architecture",
      "Advanced security features",
      "Scalability planning",
      "Third-party integrations",
      "Dedicated support",
    ],
    cta: "Inquire About Enterprise Solutions",
  },
  // {
  //   name: "Starter",
  //   description: "Perfect for individuals and small projects getting started",
  //   price: 29,
  //   period: "month",
  //   icon: Rocket,
  //   popular: false,
  //   features: [
  //     "Up to 3 projects",
  //     "5GB storage",
  //     "Basic CI/CD pipeline",
  //     "Community support",
  //     "Standard analytics",
  //     "Email notifications",
  //   ],
  //   cta: "Start Free Trial",
  // },
  // {
  //   name: "Professional",
  //   description: "Ideal for growing teams that need more power and flexibility",
  //   price: 99,
  //   period: "month",
  //   icon: Crown,
  //   popular: true,
  //   features: [
  //     "Unlimited projects",
  //     "100GB storage",
  //     "Advanced CI/CD with parallelization",
  //     "Priority support (24hr response)",
  //     "Advanced analytics & reports",
  //     "Custom integrations",
  //     "Team collaboration tools",
  //     "API access",
  //   ],
  //   cta: "Get Started",
  // },
  // {
  //   name: "Enterprise",
  //   description: "Custom solutions for large organizations with complex needs",
  //   price: null,
  //   period: "month",
  //   icon: Buildings,
  //   popular: false,
  //   features: [
  //     "Everything in Professional",
  //     "Unlimited storage",
  //     "Dedicated infrastructure",
  //     "SLA guarantees (99.99% uptime)",
  //     "Custom security policies",
  //     "On-premise deployment option",
  //     "Advanced audit logs",
  //     "SSO & SAML integration",
  //   ],
  //   cta: "Contact Sales",
  // },
];

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const heroRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.03, duration: 0.5, ease: "easeOut" as const },
    }),
  };

  return (
    <div className="relative">
      <ParallaxBackground />
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 hero-gradient-bg"
      >
        {[...Array(8)].map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.5}
            x={10 + Math.random() * 80}
            y={20 + Math.random() * 60}
          />
        ))}

        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-morph-blob"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-morph-blob"
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <motion.div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 overflow-hidden relative"
            >
              <div className="absolute inset-0 animate-shimmer" />
              <Lightning className="w-4 h-4 text-primary" weight="fill" />
              <span className="text-sm font-medium text-primary relative z-10">
                Launching the future of development
              </span>
            </motion.div>

            <motion.h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight flex flex-wrap justify-center items-center gap-2">
              <span className="inline-block overflow-hidden">
                {"Build Faster.".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              <span className="gradient-text animate-text-glow ">
                Ship Smarter.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              The complete platform for modern development teams. From backend
              services to beautiful UIs, we've got everything you need to build,
              test, and deploy at scale.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px oklch(0.62 0.08 180 / 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => onNavigate("signin")}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-effect gap-2 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 text-foreground px-8 py-6 text-lg"
                >
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 md:mt-24 perspective-1000"
          >
            <motion.div
              className="glass-card rounded-3xl p-8 md:p-12 gradient-border glow-effect"
              whileHover={{ rotateX: 2, rotateY: -2, scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {[
                  { value: "99.9%", label: "Uptime SLA" },
                  { value: "500K+", label: "Deployments" },
                  { value: "150ms", label: "Avg Response" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1.4 + index * 0.15,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="text-center cursor-default"
                  >
                    <div className="font-heading font-bold text-3xl md:text-4xl gradient-text mb-2">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 12 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Quotes className="w-4 h-4 text-primary" weight="fill" />
              <span className="text-sm font-medium text-primary">
                Customer Stories
              </span>
            </motion.div>

            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
              Trusted by <span className="gradient-text">Industry Leaders</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See what real clients and teams have to say about working with
              SocketShock
            </p>
          </motion.div>

          <div className="flex flex-row flex-wrap justify-center gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="group max-w-xl"
              >
                <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:border-primary/40 gradient-border relative overflow-hidden">
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    initial={{ opacity: 0.1 }}
                    whileHover={{ opacity: 0.2, rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Quotes
                      className="absolute top-4 right-4 w-8 h-8 text-primary transition-colors"
                      weight="fill"
                    />
                  </motion.div>

                  <div className="flex items-center gap-1 mb-4 relative z-10">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                      >
                        <Star
                          className="w-4 h-4 text-amber-400"
                          weight="fill"
                        />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-foreground/90 leading-relaxed mb-6 text-sm relative z-10">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-border/50 relative z-10">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold text-sm"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {testimonial.avatar}
                    </motion.div>
                    <div>
                      <div className="font-heading font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
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
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", damping: 12 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <Wrench className="w-4 h-4 text-accent" weight="fill" />
              <span className="text-sm font-medium text-accent">
                Internal Tools
              </span>
            </motion.div>

            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
              Powerful <span className="gradient-text">Internal Tools</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Take control of your projects with our suite of internal tools
              designed for maximum efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internalTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                  rotateY: index % 2 === 0 ? -15 : 15,
                }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group perspective-1000"
              >
                <div className="glass-card rounded-3xl p-8 h-full transition-all duration-300 hover:border-primary/40 gradient-border glow-effect relative overflow-hidden">
                  <motion.div
                    className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="flex items-start gap-6 relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0"
                    >
                      <tool.icon
                        className="w-8 h-8 text-primary"
                        weight="duotone"
                      />
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

      <section className="min-w-80 max-w-4xl mx-auto overflow-hidden w-full">
        <MacbookScrollComponent />
      </section>

      <section id="features" className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="font-heading font-bold text-3xl md:text-5xl mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Everything You Need to{" "}
              <span className="gradient-text">Build & Scale</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              A comprehensive suite of tools and services designed for modern
              development workflows
            </motion.p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.2 },
                }}
                className="group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] perspective-1000"
              >
                <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:border-primary/40 gradient-border text-center flex flex-col items-center relative overflow-hidden">
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
                  >
                    <feature.icon
                      className="w-7 h-7 text-primary"
                      weight="duotone"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-primary/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-w-80 max-w-4xl mx-auto overflow-hidden w-full">
        <WorldMapComponent />
      </section>

      <section id="pricing" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
        <div className="absolute top-1/3 right-1/6 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 left-1/6 w-56 h-56 bg-accent/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />

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
              transition={{ type: "spring", damping: 15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <CurrencyDollar className="w-4 h-4 text-primary" weight="fill" />
              <span className="text-sm font-medium text-primary">
                Simple Pricing
              </span>
            </motion.div>

            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
              Plans That <span className="gradient-text">Scale With You</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Start free and upgrade as
              your needs grow.
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
                className={`group relative ${
                  plan.popular ? "md:-mt-4 md:mb-4" : ""
                }`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                  >
                    <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </motion.div>
                )}

                <div
                  className={`glass-card rounded-3xl p-8 h-full transition-all duration-300 gradient-border relative overflow-hidden ${
                    plan.popular
                      ? "border-primary/50 glow-effect bg-gradient-to-b from-primary/5 to-transparent"
                      : "hover:border-primary/30"
                  }`}
                >
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
                            ? "bg-gradient-to-br from-primary to-accent"
                            : "bg-primary/10"
                        }`}
                      >
                        <plan.icon
                          className={`w-6 h-6 ${
                            plan.popular
                              ? "text-primary-foreground"
                              : "text-primary"
                          }`}
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
                              plan.popular
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                            weight="bold"
                          />
                          <span className="text-foreground/80 text-sm">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={() => onNavigate("signin")}
                        className={`w-full py-6 font-semibold ${
                          plan.popular
                            ? "bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
                            : "bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border/50"
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
            * Average costs. Actual cost may vary. All prices are in USD. Taxes
            may apply based on your location.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20"
          >
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-center mb-10">
              Compare <span className="gradient-text">All Features</span>
            </h3>

            <div className="glass-card rounded-2xl overflow-hidden gradient-border">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left p-5 font-heading font-semibold text-foreground bg-card/50">
                        Feature
                      </th>
                      {pricingPlans.map((plan) => (
                        <th
                          key={plan.name}
                          className={`p-5 text-center font-heading font-semibold ${
                            plan.popular
                              ? "bg-primary/10 text-primary"
                              : "text-foreground bg-card/50"
                          }`}
                        >
                          <div className="flex flex-col items-center gap-1">
                            <span>{plan.name}</span>
                            {plan.popular && (
                              <span className="text-xs font-normal text-primary/80">
                                Recommended
                              </span>
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: "Projects",
                        starter: "3 projects",
                        pro: "Unlimited",
                        enterprise: "Unlimited",
                      },
                      {
                        feature: "Storage",
                        starter: "5 GB",
                        pro: "100 GB",
                        enterprise: "Unlimited",
                      },
                      {
                        feature: "Team Members",
                        starter: "2 members",
                        pro: "10 members",
                        enterprise: "Unlimited",
                      },
                      {
                        feature: "CI/CD Pipeline",
                        starter: "Basic",
                        pro: "Advanced + Parallel",
                        enterprise: "Custom + Dedicated",
                      },
                      {
                        feature: "Deployments/Month",
                        starter: "100",
                        pro: "1,000",
                        enterprise: "Unlimited",
                      },
                      {
                        feature: "Analytics",
                        starter: "Standard",
                        pro: "Advanced + Reports",
                        enterprise: "Enterprise + Custom",
                      },
                      {
                        feature: "API Rate Limit",
                        starter: "1K req/hr",
                        pro: "10K req/hr",
                        enterprise: "Unlimited",
                      },
                      {
                        feature: "Custom Integrations",
                        starter: false,
                        pro: true,
                        enterprise: true,
                      },
                      {
                        feature: "Team Collaboration",
                        starter: false,
                        pro: true,
                        enterprise: true,
                      },
                      {
                        feature: "API Access",
                        starter: false,
                        pro: true,
                        enterprise: true,
                      },
                      {
                        feature: "SSO / SAML",
                        starter: false,
                        pro: false,
                        enterprise: true,
                      },
                      {
                        feature: "Dedicated Infrastructure",
                        starter: false,
                        pro: false,
                        enterprise: true,
                      },
                      {
                        feature: "SLA Guarantee",
                        starter: false,
                        pro: "99.9%",
                        enterprise: "99.99%",
                      },
                      {
                        feature: "On-Premise Deployment",
                        starter: false,
                        pro: false,
                        enterprise: true,
                      },
                      {
                        feature: "Advanced Audit Logs",
                        starter: false,
                        pro: false,
                        enterprise: true,
                      },
                      {
                        feature: "Custom Security Policies",
                        starter: false,
                        pro: false,
                        enterprise: true,
                      },
                    ].map((row, index) => (
                      <motion.tr
                        key={row.feature}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.02 * index }}
                        className="border-b border-border/30 last:border-b-0 hover:bg-card/30 transition-colors"
                      >
                        <td className="p-4 text-foreground/90 font-medium text-sm">
                          {row.feature}
                        </td>
                        <td className="p-4 text-center">
                          {typeof row.starter === "boolean" ? (
                            row.starter ? (
                              <Check
                                className="w-5 h-5 text-primary mx-auto"
                                weight="bold"
                              />
                            ) : (
                              <span className="text-muted-foreground/40">
                                —
                              </span>
                            )
                          ) : (
                            <span className="text-muted-foreground text-sm">
                              {row.starter}
                            </span>
                          )}
                        </td>
                        <td
                          className={`p-4 text-center ${
                            pricingPlans[1].popular ? "bg-primary/5" : ""
                          }`}
                        >
                          {typeof row.pro === "boolean" ? (
                            row.pro ? (
                              <Check
                                className="w-5 h-5 text-primary mx-auto"
                                weight="bold"
                              />
                            ) : (
                              <span className="text-muted-foreground/40">
                                —
                              </span>
                            )
                          ) : (
                            <span className="text-foreground/90 text-sm font-medium">
                              {row.pro}
                            </span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof row.enterprise === "boolean" ? (
                            row.enterprise ? (
                              <Check
                                className="w-5 h-5 text-primary mx-auto"
                                weight="bold"
                              />
                            ) : (
                              <span className="text-muted-foreground/40">
                                —
                              </span>
                            )
                          ) : (
                            <span className="text-muted-foreground text-sm">
                              {row.enterprise}
                            </span>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div> */}
        </div>
      </section>

      <section className="mx-auto flex flex-col gap-4">
        <CodeBlockComponent />
      </section>

      <section className="mx-auto flex flex-col gap-4">
        <h1 className="text-2xl text-center font-semibold mt-24 mb-8p-2 max-w-4xl mx-auto text-muted-foreground ">
          We also offer graphic design services to complement your development
          projects. From logos to full branding packages, our design team is here
          to help your brand stand out.
        </h1>
        <ParallaxScrollComponent />
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
            <motion.h2
              className="font-heading font-bold text-3xl md:text-5xl mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              Ready to{" "}
              <motion.span
                className="gradient-text inline-block"
                animate={{
                  textShadow: [
                    "0 0 20px oklch(0.62 0.08 180 / 0.3)",
                    "0 0 40px oklch(0.62 0.08 180 / 0.5)",
                    "0 0 20px oklch(0.62 0.08 180 / 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Transform
              </motion.span>{" "}
              Your Development?
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Spark your next project with SocketShock and let you ideas come to
              light.
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button
                onClick={() => onNavigate("signin")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg glow-effect gap-2 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Building Today
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
