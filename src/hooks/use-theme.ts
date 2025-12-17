import { useEffect } from 'react'
import { useKV } from '@github/spark/hooks'

export type Theme = 'dark' | 'light'

export function useTheme() {
  const [theme, setTheme] = useKV<Theme>('color-theme', 'dark')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light-mode')
    } else {
      root.classList.remove('light-mode')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return { theme, setTheme, toggleTheme }
}
