import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie, Sparkle } from "@phosphor-icons/react";

interface CookieConsentProps {
  onAccept: () => void;
  onLogoClick: () => void;
}

export default function CookieConsent({
  onAccept,
  onLogoClick,
}: CookieConsentProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 200 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 dark-section"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="glass-card rounded-2xl p-6 glow-effect relative overflow-hidden"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 100%" }}
          />

          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                y: [0, -30],
                x: [0, (i - 1) * 15],
              }}
              transition={{
                duration: 2,
                delay: i * 0.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              style={{ left: `${30 + i * 20}%`, bottom: "20%" }}
            >
              <Sparkle className="w-3 h-3 text-primary" weight="fill" />
            </motion.div>
          ))}

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 relative z-10">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", damping: 10 }}
              className="flex-shrink-0"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                onClick={onLogoClick}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onLogoClick();
                  }
                }}
                aria-label="Cookie logo"
                className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center cursor-pointer"
              >
                <Cookie className="w-6 h-6 text-primary" weight="fill" />
              </motion.div>
            </motion.div>

            <motion.div
              className="flex-1 text-center md:text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                We Use Cookies
              </h3>
              <p className="text-muted-foreground text-sm">
                This website uses cookies to enhance your browsing experience
                and analyze site traffic. Your personal information is never
                shared with third parties.
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={onAccept}
                className="whitespace-nowrap bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 relative overflow-hidden group"
              >
                <span className="relative z-10">I Understand</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
