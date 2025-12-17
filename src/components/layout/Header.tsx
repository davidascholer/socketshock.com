import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Lightning, SignIn, Sun, Moon } from '@phosphor-icons/react'
import { useTheme } from '@/hooks/use-theme'

type Page = 'home' | 'signin' | 'privacy' | 'terms'

interface HeaderProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-40 dark-section header-fixed"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-4">
        <motion.div 
          className="glass-card rounded-2xl px-6 py-3 relative overflow-hidden"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: '200% 100%' }}
          />
          <div className="flex items-center justify-between relative z-10">
            <motion.button
              onClick={() => onNavigate('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <motion.div 
                className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center"
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <Lightning className="w-5 h-5 text-primary" weight="fill" />
              </motion.div>
              <motion.span 
                className="font-heading font-bold text-xl text-[oklch(0.95_0.01_260)]"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                NexusFlow
              </motion.span>
            </motion.button>

            <nav className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                <Button
                  onClick={toggleTheme}
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 rounded-xl text-[oklch(0.95_0.01_260)] hover:bg-primary/10 hover:text-primary relative overflow-hidden"
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    {theme === 'dark' ? (
                      <Sun className="w-5 h-5" weight="fill" />
                    ) : (
                      <Moon className="w-5 h-5" weight="fill" />
                    )}
                  </motion.div>
                </Button>
              </motion.div>

              {currentPage !== 'signin' && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button
                    onClick={() => onNavigate('signin')}
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 text-[oklch(0.95_0.01_260)] gap-2 relative overflow-hidden group"
                  >
                    <motion.span
                      className="absolute inset-0 bg-primary/10"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                    <SignIn className="w-4 h-4 relative z-10" />
                    <span className="hidden sm:inline relative z-10">Sign In</span>
                  </Button>
                </motion.div>
              )}
              {currentPage === 'signin' && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button
                    onClick={() => onNavigate('home')}
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 text-[oklch(0.95_0.01_260)]"
                  >
                    Back to Home
                  </Button>
                </motion.div>
              )}
            </nav>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}
