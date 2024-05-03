'use client'
import { Trash2, UserCog } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useScore } from '@/store/useScore'
import { toast } from 'sonner'
import { ToggleTheme } from './toggleTheme'

export function Settings() {
  const resetScore = () => {
    useScore.getState().resetScore()
    useScore.persist.clearStorage()

    toast.success('Your score has been reset.')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <UserCog />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <ToggleTheme />
          <DropdownMenuItem onClick={resetScore}>
            <Trash2 className="mr-2 h-4 w-4" />
            <span>Reset score</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
