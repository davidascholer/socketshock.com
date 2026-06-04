import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Lightning, SignIn } from "@phosphor-icons/react";
import { useTheme } from "@/hooks/use-theme";

type Page = "home" | "signin" | "privacy" | "terms";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  useTheme();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      }}
      className="fixed top-0 left-0 right-0 z-40 header-fixed"
    >
      <div className="w-full">
        <motion.div
          className="px-6 py-3 relative overflow-hidden"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-center justify-between relative z-10">
            <motion.button
              onClick={() => onNavigate("home")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <motion.div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  className="inline-block w-10 h-10"
                  src="/images/socketshock_filled.svg"
                  alt="SocketShock Logo"
                />
              </motion.div>
              <motion.span
                className="brand-wordmark font-bold text-xl text-[oklch(0.95_0.01_260)]"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                SocketShock
              </motion.span>
            </motion.button>

            <nav className="flex items-center gap-3">
              {currentPage !== "signin" && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button
                    onClick={() => onNavigate("signin")}
                    variant="outline"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 text-[oklch(0.95_0.01_260)] gap-2 relative overflow-hidden group"
                  >
                    <motion.span
                      className="absolute inset-0 bg-primary/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <SignIn className="w-4 h-4 relative z-10" />
                    <span className="hidden sm:inline relative z-10">
                      Client Portal
                    </span>
                  </Button>
                </motion.div>
              )}
              {currentPage === "signin" && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button
                    onClick={() => onNavigate("home")}
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
  );
}
