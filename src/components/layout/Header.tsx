import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Lightning, SignIn } from '@phosphor-icons/react'

type Page = 'home' | 'signin' | 'privacy' | 'terms'

interface HeaderProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-4">
        <div className="glass-card rounded-2xl px-6 py-3">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => onNavigate('home')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Lightning className="w-5 h-5 text-primary" weight="fill" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                NexusFlow
              </span>
            </motion.button>

            <nav className="flex items-center gap-4">
              {currentPage !== 'signin' && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => onNavigate('signin')}
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 text-foreground gap-2"
                  >
                    <SignIn className="w-4 h-4" />
                    <span className="hidden sm:inline">Sign In</span>
                  </Button>
                </motion.div>
              )}
              {currentPage === 'signin' && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => onNavigate('home')}
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 text-foreground"
                  >
                    Back to Home
                  </Button>
                </motion.div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
