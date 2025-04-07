// 'use client'
// import { MonitorCog, Moon, Sun } from 'lucide-react'
// import { useTheme } from 'next-themes'

// import { Button } from '@/components/ui/button'
// import {
// 	DropdownMenu,
// 	DropdownMenuContent,
// 	DropdownMenuItem,
// 	DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'

// export function ThemeToggle() {
// 	const { setTheme } = useTheme()

// 	return (
// 		<DropdownMenu>
// 			<DropdownMenuTrigger asChild>
// 				<Button className='border-none' variant='outline' size='icon'>
// 					<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
// 					<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
// 				</Button>
// 			</DropdownMenuTrigger>
// 			<DropdownMenuContent align='end'>
// 				<DropdownMenuItem onClick={() => setTheme('light')}>
// 					<Sun />
// 					<p>Light</p>
// 				</DropdownMenuItem>
// 				<DropdownMenuItem onClick={() => setTheme('dark')}>
// 					<Moon />
// 					<p>Dark</p>
// 				</DropdownMenuItem>
// 				<DropdownMenuItem onClick={() => setTheme('system')}>
// 					<MonitorCog />
// 					<p>System</p>
// 				</DropdownMenuItem>
// 			</DropdownMenuContent>
// 		</DropdownMenu>
// 	)
// }

'use client'
import { MonitorCog, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ThemeToggle() {
	const { setTheme, theme } = useTheme()
	const [mounted, setMounted] = useState(false) // Client tomonda render qilishni tekshirish uchun holat

	// useEffect orqali komponent client tomonda o'rnatilganidan keyin mounted holatini true qilish
	useEffect(() => {
		setMounted(true)
	}, [])

	// Agar client tomonda o'rnatilmagan bo'lsa, UI ni render qilmang
	if (!mounted) return null

	// Tema o'zgartirish funksiyasi
	const handleToggle = (newTheme: string) => {
		setTheme(newTheme)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className='border-none' variant='outline' size='icon'>
					{theme === 'dark' ? (
						<Sun className='h-[1.2rem] w-[1.2rem]' />
					) : (
						<Moon className='h-[1.2rem] w-[1.2rem]' />
					)}
					
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem onClick={() => handleToggle('light')}>
					<Sun />
					<p>Light</p>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => handleToggle('dark')}>
					<Moon />
					<p>Dark</p>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => handleToggle('system')}>
					<MonitorCog />
					<p>System</p>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
