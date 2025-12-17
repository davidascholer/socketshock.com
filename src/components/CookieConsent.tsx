import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Cookie } from '@phosphor-icons/react'

interface CookieConsentProps {
  onAccept: () => void
}

export default function CookieConsent({ onAccept }: CookieConsentProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div className="mx-auto max-w-4xl">
        <div className="glass-card rounded-2xl p-6 glow-effect">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', damping: 15 }}
              className="flex-shrink-0"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Cookie className="w-6 h-6 text-primary" weight="fill" />
              </div>
            </motion.div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                We Use Cookies
              </h3>
              <p className="text-muted-foreground text-sm">
                This website uses cookies to enhance your browsing experience and analyze site traffic. 
                Your personal information is never shared with third parties.
              </p>
            </div>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                onClick={onAccept}
                className="whitespace-nowrap bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                I Understand
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
