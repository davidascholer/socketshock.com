import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { motion, AnimatePresence } from 'framer-motion'
import { Toaster } from 'sonner'
import LandingPage from './components/pages/LandingPage'
import SignInPage from './components/pages/SignInPage'
import PrivacyPage from './components/pages/PrivacyPage'
import TermsPage from './components/pages/TermsPage'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import CookieConsent from './components/CookieConsent'

type Page = 'home' | 'signin' | 'privacy' | 'terms'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [cookieAccepted, setCookieAccepted] = useKV<boolean>('cookie-consent-accepted', false)

  const navigateTo = (page: Page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'signin':
        return <SignInPage />
      case 'privacy':
        return <PrivacyPage />
      case 'terms':
        return <TermsPage />
      default:
        return <LandingPage onNavigate={navigateTo} />
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: 'var(--popover)',
            color: 'var(--popover-foreground)',
            border: '1px solid var(--border)',
          },
        }}
      />
      
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>

      <Footer onNavigate={navigateTo} />

      <AnimatePresence>
        {!cookieAccepted && (
          <CookieConsent onAccept={() => setCookieAccepted(true)} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
