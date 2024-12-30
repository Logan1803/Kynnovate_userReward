"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { HomeIcon, UserIcon, Settings } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Button
        variant="ghost"
        className={cn(
          "hover:bg-transparent hover:text-primary",
          pathname === "/" && "text-primary"
        )}
        asChild
      >
        <Link href="/">
          <HomeIcon className="h-4 w-4 mr-2" />
          Home
        </Link>
      </Button>
      <Button
        variant="ghost"
        className={cn(
          "hover:bg-transparent hover:text-primary",
          pathname === "/profile" && "text-primary"
        )}
        asChild
      >
        <Link href="/profile">
          <UserIcon className="h-4 w-4 mr-2" />
          Profile
        </Link>
      </Button>
      <Button
        variant="ghost"
        className={cn(
          "hover:bg-transparent hover:text-primary",
          pathname === "/settings" && "text-primary"
        )}
        asChild
      >
        <Link href="/settings">
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Link>
      </Button>
    </nav>
  )
}