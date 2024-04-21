'use client'
import { Loader2, Moon, SunMoon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

export const ToggleTheme = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button disabled variant="outline" size="icon">
        <Loader2 className="h-4 w-4 animate-spin" />
      </Button>
    )
  }

  return (
    <>
      {resolvedTheme === 'dark' ? (
        <Button variant="outline" size="icon" onClick={() => setTheme('light')}>
          <SunMoon />
        </Button>
      ) : (
        <Button variant="outline" size="icon" onClick={() => setTheme('dark')}>
          <Moon />
        </Button>
      )}
    </>
  )
}
