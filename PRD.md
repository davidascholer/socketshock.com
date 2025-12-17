# Planning Guide

A stunning, animation-rich SaaS product landing page that showcases development services with sleek visuals, compelling feature presentations, and a seamless user journey from discovery to client sign-up.

**Experience Qualities**:
1. **Premium** - Every interaction should feel polished and high-end, reflecting the quality of the services offered
2. **Dynamic** - Heavy use of animations creates energy and engagement, making the experience memorable
3. **Professional** - Clean typography and structured layouts convey trust and competence

**Complexity Level**: Light Application (multiple features with basic state)
- Multiple pages (landing, sign-in, privacy, terms), persistent cookie consent state, and contact form with validation

## Essential Features

### Hero Section with Animated Elements
- **Functionality**: Eye-catching hero with animated gradients, floating elements, and compelling CTA
- **Purpose**: Immediately captures attention and communicates brand identity
- **Trigger**: Page load
- **Progression**: Animations stagger in → User reads value proposition → CTA draws attention → User clicks to sign in
- **Success criteria**: Smooth 60fps animations, clear messaging, prominent CTA button

### Feature Showcase Grid
- **Functionality**: Animated cards displaying all 15+ features with icons and descriptions
- **Purpose**: Communicates comprehensive service offerings
- **Trigger**: Scroll into viewport
- **Progression**: Cards animate in with stagger → User hovers for interaction → Reads feature details
- **Success criteria**: All features visible, hover states work, animations trigger on scroll

### Internal Tools Section
- **Functionality**: Dedicated section highlighting analytics, project management, UI tools, and data management
- **Purpose**: Differentiates from competitors by showing value-add tools
- **Trigger**: Scroll into viewport
- **Progression**: Section animates in → Icons/illustrations animate → User understands toolset
- **Success criteria**: Clear visual hierarchy, animations enhance understanding

### Customer Testimonials Section
- **Functionality**: Grid of 6 testimonial cards featuring customer quotes, names, roles, companies, and star ratings
- **Purpose**: Builds trust and social proof by showcasing real customer success stories
- **Trigger**: Scroll into viewport
- **Progression**: Cards animate in with stagger effect → User reads testimonials → Hover for subtle interaction → User feels confident in the product
- **Success criteria**: Cards display properly on all screen sizes, animations are smooth, testimonials are compelling and diverse

### Pricing Section
- **Functionality**: Three-tier pricing display (Starter, Professional, Enterprise) with feature lists, pricing, and CTAs
- **Purpose**: Clearly communicate pricing options and drive conversions by highlighting the most popular plan
- **Trigger**: Scroll into viewport
- **Progression**: Section animates in → User compares plans → Hovers for interaction effects → Clicks CTA to sign up
- **Success criteria**: Plans are clearly differentiated, Professional tier stands out as "Most Popular", all CTAs link to sign-in, responsive on all devices

### Feature Comparison Table
- **Functionality**: Detailed side-by-side comparison table showing all features across Starter, Professional, and Enterprise tiers
- **Purpose**: Helps users make informed decisions by clearly showing what's included in each plan
- **Trigger**: Scroll below pricing cards
- **Progression**: Table animates in row by row → User scans features → Compares values across columns → Professional column subtly highlighted → User identifies best plan for their needs
- **Success criteria**: Table is responsive with horizontal scroll on mobile, rows animate on scroll, Professional column visually emphasized, checkmarks/dashes clearly show feature availability

### Navigation Header
- **Functionality**: Fixed header with logo and login link
- **Purpose**: Consistent navigation and branding across all pages
- **Trigger**: Present on all pages
- **Progression**: Always visible → User clicks logo to go home or login to sign in
- **Success criteria**: Smooth scroll behavior, visible on all pages

### Footer with Links
- **Functionality**: Standard SaaS footer with company links, legal pages, social links
- **Purpose**: Professional appearance and legal compliance
- **Trigger**: Scroll to bottom
- **Progression**: User scrolls to footer → Finds relevant links → Navigates to legal pages
- **Success criteria**: All links work, includes Terms of Service and Privacy Policy

### Cookie Consent Popup
- **Functionality**: One-time popup informing users about cookie usage
- **Purpose**: Legal compliance and transparency
- **Trigger**: First visit (persisted via useKV)
- **Progression**: Popup appears → User reads → Clicks "I Understand" → Never shown again
- **Success criteria**: Only shows once, persists across sessions

### Sign In Page with Contact Form
- **Functionality**: Login portal with client application form including project type dropdown
- **Purpose**: Convert visitors into leads/clients
- **Trigger**: User clicks login in header
- **Progression**: User navigates to page → Fills form → Selects project type → Submits
- **Success criteria**: Form validation works, dropdown has 10 options plus custom

### Privacy Policy Page
- **Functionality**: Standard privacy policy explaining cookie usage and data handling
- **Purpose**: Legal compliance and user trust
- **Trigger**: User clicks link in footer
- **Progression**: User navigates → Reads policy content
- **Success criteria**: Clear, readable content, proper formatting

### Terms of Service Page
- **Functionality**: Standard SaaS terms of service
- **Purpose**: Legal protection and clarity
- **Trigger**: User clicks link in footer
- **Progression**: User navigates → Reads terms content
- **Success criteria**: Clear, readable content, proper formatting

## Edge Case Handling
- **Empty form submission**: Form validation prevents submission without required fields
- **Invalid email**: Regex validation with clear error message
- **Cookie already dismissed**: useKV check prevents re-showing popup
- **Mobile viewport**: Responsive design adapts all elements
- **Slow connection**: Skeleton states and graceful animation fallbacks

## Design Direction
The design should evoke feelings of innovation, trustworthiness, and sophistication. Users should feel they're engaging with a cutting-edge technology company that delivers premium results. The dark theme with teal accents creates a modern tech aesthetic.

## Color Selection
A bold, modern palette centered on deep charcoal and vibrant teal creates a premium tech aesthetic.

- **Primary Color**: `oklch(0.62 0.08 180)` (#5f9da0 - Teal) - Represents innovation, reliability, and technology
- **Secondary Colors**: `oklch(0.20 0.01 0)` (#222222 - Charcoal) - Professional depth, premium feel
- **Accent Color**: `oklch(0.70 0.12 180)` (Bright Teal) - CTAs and important interactive elements
- **Background**: `oklch(0.15 0.01 0)` (Near Black) - Deep, immersive dark theme
- **Foreground/Background Pairings**:
  - Background (#151515) with Foreground (#f5f5f5): Ratio 14.2:1 ✓
  - Primary Teal (#5f9da0) on Charcoal (#222222): Ratio 5.1:1 ✓
  - White (#ffffff) on Primary Teal (#5f9da0): Ratio 4.8:1 ✓

## Font Selection
Typography should feel modern, technical, and highly readable. Using Space Grotesk for headings provides geometric precision and tech character, while Inter for body text ensures excellent readability.

- **Typographic Hierarchy**:
  - H1 (Hero): Space Grotesk Bold/56px/tight letter spacing
  - H2 (Sections): Space Grotesk Semibold/40px/tight
  - H3 (Features): Space Grotesk Medium/24px/normal
  - Body: Inter Regular/16px/1.6 line height
  - Small/Caption: Inter Medium/14px/normal

## Animations
Animations should be purposeful and enhance the premium feel without being distracting. Use framer-motion for orchestrated entrance animations, hover interactions, and scroll-triggered reveals. Key moments: hero elements float and pulse subtly, feature cards stagger in on scroll, buttons have satisfying press states, and page transitions feel smooth.

## Component Selection
- **Components**:
  - Card: Feature cards with glass-morphism effect, border-primary/20 on hover
  - Button: Primary variant with scale animation on hover, pulse effect on CTAs
  - Input: Dark variant with teal focus ring
  - Select: Dropdown for project types with custom styling
  - Dialog: Cookie consent with backdrop blur
  - Separator: Section dividers with gradient fade
- **Customizations**:
  - GlassCard: Custom frosted glass effect card
  - AnimatedSection: Wrapper for scroll-triggered animations
  - FloatingElement: Decorative animated background elements
- **States**:
  - Buttons: Rest → Hover (scale 1.02, glow) → Active (scale 0.98) → Disabled (opacity 50%)
  - Inputs: Rest → Focus (teal ring) → Error (red ring) → Success (green check)
  - Cards: Rest → Hover (lift, border glow)
- **Icon Selection**: Phosphor icons - Lightning for speed, Shield for security, Cube for backend, Code for development, ChartLine for analytics, Kanban for project management
- **Spacing**: Tailwind scale - sections py-24, cards p-6, gaps gap-8
- **Mobile**: Stack feature cards, reduce hero text size, hamburger menu for nav, full-width forms
