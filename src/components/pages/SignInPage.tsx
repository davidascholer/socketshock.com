import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Lightning,
  User,
  Envelope,
  Buildings,
  ChatCircle,
  PaperPlaneTilt,
  CheckCircle,
} from '@phosphor-icons/react'

const projectTypes = [
  { value: 'backend-service', label: 'Backend Service' },
  { value: 'shopping-app', label: 'Shopping App' },
  { value: 'personal-website', label: 'Personal Website' },
  { value: 'ecommerce', label: 'E-Commerce Platform' },
  { value: 'frontend-work', label: 'Front-End Work for Backend Services' },
  { value: 'mobile-app', label: 'Mobile Application' },
  { value: 'saas-platform', label: 'SaaS Platform' },
  { value: 'enterprise-software', label: 'Enterprise Software' },
  { value: 'api-development', label: 'API Development' },
  { value: 'data-platform', label: 'Data Platform' },
  { value: 'custom', label: 'Custom / None of the Above' },
]

export default function SignInPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.projectType) {
      toast.error('Please fill in all required fields')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    toast.success('Application submitted successfully!')
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-12 text-center max-w-md glow-effect"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 10, delay: 0.2 }}
            className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-primary" weight="fill" />
          </motion.div>
          <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
            Application Received!
          </h2>
          <p className="text-muted-foreground mb-6">
            Thank you for your interest in NexusFlow. Our team will review your application and get back to you within 24-48 hours.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            Submit Another Application
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="glass-card rounded-3xl p-10 gradient-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Lightning className="w-6 h-6 text-primary" weight="fill" />
                </div>
                <span className="font-heading font-bold text-2xl text-foreground">
                  NexusFlow
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Let's Build Something{' '}
                <span className="gradient-text">Amazing</span> Together
              </h2>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Ready to take your project to the next level? Tell us about your vision and we'll help you bring it to life with our cutting-edge development platform.
              </p>

              <div className="space-y-4">
                {[
                  'Dedicated project manager',
                  'Weekly progress reports',
                  'Unlimited revisions',
                  '24/7 priority support',
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-primary" weight="fill" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-3xl p-8 md:p-10 glow-effect gradient-border">
              <div className="text-center mb-8">
                <h1 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
                  Become a Client
                </h1>
                <p className="text-muted-foreground">
                  Fill out the form below to get started
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-muted/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                    <Envelope className="w-4 h-4 text-primary" />
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-muted/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground flex items-center gap-2">
                    <Buildings className="w-4 h-4 text-primary" />
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your Company Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-muted/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground flex items-center gap-2">
                    <Lightning className="w-4 h-4 text-primary" />
                    Project Type <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger className="w-full bg-muted/50 border-border/50 focus:border-primary">
                      <SelectValue placeholder="Select your project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {projectTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground flex items-center gap-2">
                    <ChatCircle className="w-4 h-4 text-primary" />
                    Project Details
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-muted/50 border-border/50 focus:border-primary min-h-[120px]"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg glow-effect gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                        />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <PaperPlaneTilt className="w-5 h-5" weight="fill" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
