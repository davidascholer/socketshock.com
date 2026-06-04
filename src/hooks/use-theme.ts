import { useEffect } from "react";
import { useKV } from "@github/spark/hooks";

export type Theme = "dark" | "light";

export function useTheme() {
  const [theme, setTheme] = useKV<Theme>("color-theme", "dark");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light-mode");
    if (theme !== "dark") {
      setTheme("dark");
    }
  }, [theme, setTheme]);

  const toggleTheme = () => {
    setTheme("dark");
  };

  return { theme, setTheme, toggleTheme };
}
