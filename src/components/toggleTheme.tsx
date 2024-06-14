'use client'
import { Loader2, Moon, SunMoon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { DropdownMenuItem } from './ui/dropdown-menu'

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
      <DropdownMenuItem
        onClick={() =>
          resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark')
        }
      >
        {resolvedTheme === 'dark' ? (
          <SunMoon className="mr-2 h-4 w-4" />
        ) : (
          <Moon className="mr-2 h-4 w-4" />
        )}
        <span>{resolvedTheme === 'dark' ? 'Light' : 'Dark'} mode</span>
      </DropdownMenuItem>
    </>
  )
}
