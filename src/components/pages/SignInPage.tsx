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
      <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              initial={{ 
                x: '50%', 
                y: '50%',
                scale: 0
              }}
              animate={{ 
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 2,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="glass-card rounded-3xl p-12 text-center max-w-md glow-effect relative overflow-hidden"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', damping: 8, delay: 0.3 }}
            className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 relative z-10"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <CheckCircle className="w-10 h-10 text-primary" weight="fill" />
            </motion.div>
          </motion.div>
          <motion.h2 
            className="font-heading font-bold text-2xl text-foreground mb-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Application Received!
          </motion.h2>
          <motion.p 
            className="text-muted-foreground mb-6 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Thank you for your interest in SocketShock. Our team will review your application and get back to you within 24-48 hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 relative z-10"
            >
              Submit Another Application
            </Button>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block perspective-1000"
          >
            <motion.div 
              className="glass-card rounded-3xl p-10 gradient-border relative overflow-hidden"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Lightning className="w-6 h-6 text-primary" weight="fill" />
                </motion.div>
                <span className="font-heading font-bold text-2xl text-foreground">
                  SocketShock
                </span>
              </div>

              <motion.h2 
                className="font-heading font-bold text-3xl text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Let's Build Something{' '}
                <motion.span 
                  className="gradient-text"
                  animate={{ 
                    textShadow: [
                      "0 0 10px oklch(0.62 0.08 180 / 0.3)",
                      "0 0 20px oklch(0.62 0.08 180 / 0.5)",
                      "0 0 10px oklch(0.62 0.08 180 / 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Amazing
                </motion.span> Together
              </motion.h2>

              <motion.p 
                className="text-muted-foreground text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Ready to take your project to the next level? Tell us about your vision and we'll help you bring it to life with our cutting-edge development platform.
              </motion.p>

              <div className="space-y-4">
                {[
                  'Dedicated Agile project management',
                  'Weekly progress reports',
                  'Client or team collaborated design and prototyping',
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-3"
                  >
                    <motion.div 
                      className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    >
                      <CheckCircle className="w-4 h-4 text-primary" weight="fill" />
                    </motion.div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="perspective-1000"
          >
            <motion.div 
              className="glass-card rounded-3xl p-8 md:p-10 glow-effect gradient-border relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50"
              />
              <div className="text-center mb-8 relative z-10">
                <motion.h1 
                  className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Become a Client
                </motion.h1>
                <motion.p 
                  className="text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Fill out the form below to get started
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {[
                  { id: 'name', icon: User, label: 'Full Name', required: true, type: 'text', placeholder: 'John Doe' },
                  { id: 'email', icon: Envelope, label: 'Email Address', required: true, type: 'email', placeholder: 'john@company.com' },
                  { id: 'company', icon: Buildings, label: 'Company Name', required: false, type: 'text', placeholder: 'Your Company Inc.' },
                ].map((field, index) => (
                  <motion.div 
                    key={field.id} 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Label htmlFor={field.id} className="text-foreground flex items-center gap-2">
                      <field.icon className="w-4 h-4 text-primary" />
                      {field.label} {field.required && <span className="text-destructive">*</span>}
                    </Label>
                    <Input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                      className="bg-muted/50 border-border/50 focus:border-primary transition-all duration-300 focus:scale-[1.01]"
                    />
                  </motion.div>
                ))}

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
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
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <Label htmlFor="message" className="text-foreground flex items-center gap-2">
                    <ChatCircle className="w-4 h-4 text-primary" />
                    Project Details
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-muted/50 border-border/50 focus:border-primary min-h-[120px] transition-all duration-300 focus:scale-[1.01]"
                  />
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.03 }} 
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg glow-effect gap-2 relative overflow-hidden group"
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
                        <span className="relative z-10 flex items-center gap-2">
                          Submit Application
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <PaperPlaneTilt className="w-5 h-5" weight="fill" />
                          </motion.span>
                        </span>
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.5 }}
                        />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
