// 'use client'

// import { Button } from '@/components/ui/button'
// import {
// 	CircleUserRound,
// 	FolderKanban,
// 	House,
// 	Images,
// 	ShieldCheck,
// } from 'lucide-react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { ThemeToggle } from './theme-toggle'

// export default function Navbar() {
// 	const pathname = usePathname()

// 	const isActive = (path: string) => {
// 		return pathname === path
// 	}

// 	return (
// 		<header className='sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm py-1'>
// 			<div className='container flex h-16 items-center justify-between'>
// 				<Link href='/' className='font-bold'>
// 					<span className='text-primary font-roboto text-3xl'>
// 						#mg
// 					</span>
// 				</Link>
// 				<nav className='hidden md:block'>
// 					<ul className='flex gap-4 border p-1 rounded-xl items-center'>
// 						<li>
// 							<Link
// 								href='/'
// 								className={`flex items-center p-1 rounded-lg gap-1 transition-colors  ${
// 									isActive('/')
// 										? 'text-muted-foreground border p-1 rounded-lg flex items-center gap-1'
// 										: 'text-muted-foreground hover:text-primary'
// 								}`}
// 							>
// 								<House size={'20px'} />
// 								<p className='flex items-center'>Home</p>
// 							</Link>
// 						</li>
// 						<li>
// 							<Link
// 								href='/about'
// 								className={`flex items-center  p-1 rounded-lg gap-1 transition-colors  ${
// 									isActive('/about')
// 										? 'text-muted-foreground border p-1 rounded-lg flex items-center gap-1'
// 										: 'text-muted-foreground hover:text-primary'
// 								}`}
// 							>
// 								<CircleUserRound size={'20px'} />
// 								<p className='text-[16px]'>About</p>
// 							</Link>
// 						</li>
// 						<li>
// 							<Link
// 								href='/projects'
// 								className={`transition-colors  p-1 rounded-lg flex items-center gap-1 ${
// 									isActive('/projects')
// 										? 'text-muted-foreground border p-1 rounded-lg flex items-center gap-1'
// 										: 'text-muted-foreground hover:text-primary'
// 								}`}
// 							>
// 								<FolderKanban size={'20px'} />
// 								<p>Projects</p>
// 							</Link>
// 						</li>
// 						<li>
// 							<Link
// 								href='/skills'
// 								className={`transition-colors  p-1 rounded-lg flex items-center gap-1 ${
// 									isActive('/skills')
// 										? 'text-muted-foreground border p-1 rounded-lg'
// 										: 'text-muted-foreground hover:text-primary'
// 								}`}
// 							>
// 								<ShieldCheck size={'20px'} />
// 								<p>Skills</p>
// 							</Link>
// 						</li>
// 						<li>
// 							<Link
// 								href='/contact'
// 								className={`transition-colors  p-1 rounded-lg flex items-center gap-1 ${
// 									isActive('/contact')
// 										? 'text-muted-foreground border p-1 rounded-lg'
// 										: 'text-muted-foreground hover:text-primary'
// 								}`}
// 							>
// 								<Images size={'20px'} />
// 								<p>Contact</p>
// 							</Link>
// 						</li>
// 					</ul>
// 				</nav>
// 				<div className='flex items-center gap-4'>
// 					<ThemeToggle />
// 					<Button asChild>
// 						<Link href='/contact'>Get in Touch</Link>
// 					</Button>
// 				</div>
// 			</div>
// 		</header>
// 	)
// }

// 'use client'

// import { Button } from '@/components/ui/button'
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
// import {
// 	CircleUserRound,
// 	FolderKanban,
// 	HomeIcon as House,
// 	Images,
// 	Menu,
// 	ShieldCheck,
// } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useState } from 'react'
// import { ThemeToggle } from './theme-toggle'

// export default function Navbar() {
// 	const pathname = usePathname()
// 	const [open, setOpen] = useState(false)

// 	const isActive = (path: string) => {
// 		return pathname === path
// 	}

// 	const navLinks = [
// 		{ href: '/', label: 'Home', icon: House },
// 		{ href: '/about', label: 'About', icon: CircleUserRound },
// 		{ href: '/projects', label: 'Projects', icon: FolderKanban },
// 		{ href: '/blogs', label: 'Blogs', icon: ShieldCheck },
// 		{ href: '/gallery', label: 'Gallery', icon: Images },
// 	]

// 	return (
// 		<header className='my-1 fixed w-full top-0 z-50 border rounded-xl bg-background backdrop-blur-sm py-1'>
// 			<div className='container flex h-16 items-center justify-between'>
// 				<Link href='/' className='border rounded-lg'>
// 					<Image
// 						src='https://assets.aceternity.com/logo-dark.png'
// 						alt='logo'
// 						width={40}
// 						height={40}
// 					/>
// 				</Link>

// 				{/* Desktop Navigation */}
// 				<nav className='hidden md:block'>
// 					<ul className='flex gap-4 border p-1 rounded-xl items-center'>
// 						{navLinks.map(link => (
// 							<li key={link.href}>
// 								<Link
// 									href={link.href}
// 									className={`flex items-center p-1 rounded-lg gap-1 transition-colors ${
// 										isActive(link.href)
// 											? 'text-muted-foreground border p-1 rounded-lg flex items-center gap-1'
// 											: 'text-muted-foreground hover:text-primary'
// 									}`}
// 								>
// 									<link.icon size={'20px'} />
// 									<p>{link.label}</p>
// 								</Link>
// 							</li>
// 						))}
// 					</ul>
// 				</nav>

// 				<div className='flex items-center md:gap-4'>
// 					<ThemeToggle />

// 					{/* Desktop CTA Button */}
// 					<Button asChild className='hidden md:flex'>
// 						<Link href='/contact'>Get in Touch</Link>
// 					</Button>

// 					{/* Mobile Hamburger Menu */}
// 					<Sheet open={open} onOpenChange={setOpen}>
// 						<SheetTrigger asChild className='md:hidden'>
// 							<Button variant='ghost' size='icon'>
// 								<Menu className='h-5 w-5' />
// 								<span className='sr-only'>Toggle menu</span>
// 							</Button>
// 						</SheetTrigger>
// 						<SheetContent
// 							side='left'
// 							className='w-[300px] sm:w-[300px]'
// 						>
// 							<div className='flex flex-col h-full'>
// 								<div className='flex items-center justify-between py-4'>
// 									<Link
// 										href='/'
// 										className='font-bold'
// 										onClick={() => setOpen(false)}
// 									>
// 										<span className='text-primary font-roboto text-3xl'>
// 											#mg
// 										</span>
// 									</Link>
// 								</div>

// 								<nav className='flex-1 py-8'>
// 									<ul className='space-y-4'>
// 										{navLinks.map(link => (
// 											<li key={link.href}>
// 												<Link
// 													href={link.href}
// 													onClick={() =>
// 														setOpen(false)
// 													}
// 													className={`flex items-center p-2 rounded-lg gap-2 transition-colors ${
// 														isActive(link.href)
// 															? 'text-primary border bg-muted'
// 															: 'text-muted-foreground hover:text-primary hover:bg-muted'
// 													}`}
// 												>
// 													<link.icon size={'20px'} />
// 													<p className='text-base'>
// 														{link.label}
// 													</p>
// 												</Link>
// 											</li>
// 										))}
// 									</ul>
// 								</nav>

// 								<div className='py-4'>
// 									<Button asChild className='w-full'>
// 										<Link
// 											href='/contact'
// 											onClick={() => setOpen(false)}
// 										>
// 											Get in Touch
// 										</Link>
// 									</Button>
// 								</div>
// 							</div>
// 						</SheetContent>
// 					</Sheet>
// 				</div>
// 			</div>
// 		</header>
// 	)
// }

'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { motion } from 'framer-motion'
import {
	CircleUserRound,
	FolderKanban,
	HomeIcon as House,
	Images,
	Menu,
	ShieldCheck,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ThemeToggle } from './theme-toggle'

export default function Navbar() {
	const pathname = usePathname()
	const [open, setOpen] = useState(false)

	const isActive = (path: string) => {
		return pathname === path
	}

	const navLinks = [
		{ href: '/', label: 'Home', icon: House },
		{ href: '/about', label: 'About', icon: CircleUserRound },
		{ href: '/projects', label: 'Projects', icon: FolderKanban },
		{ href: '/blogs', label: 'Blogs', icon: ShieldCheck },
		{ href: '/gallery', label: 'Gallery', icon: Images },
	]

	return (
		<header className='my-1 fixed w-full top-0 z-50 border rounded-xl bg-background backdrop-blur-sm py-1'>
			<div className='container flex h-16 items-center justify-between'>
				<Link href='/' className='border rounded-lg'>
					<Image
						src='https://assets.aceternity.com/logo-dark.png'
						alt='logo'
						width={40}
						height={40}
					/>
				</Link>

				{/* Desktop Navigation */}
				<nav className='hidden md:block'>
					<ul className='flex gap-4 border p-1 rounded-xl items-center'>
						{navLinks.map(link => (
							<li key={link.href} className='relative'>
								<Link
									href={link.href}
									className={`flex items-center p-1 rounded-lg gap-1 transition-colors ${
										isActive(link.href)
											? 'text-primary'
											: 'text-muted-foreground hover:text-primary'
									}`}
								>
									<link.icon size={'20px'} />
									<p>{link.label}</p>

									{isActive(link.href) && (
										<motion.div
											layoutId='navbar-indicator'
											className='absolute inset-0 bg-muted border rounded-lg -z-10'
											transition={{
												type: 'spring',
												stiffness: 350,
												damping: 30,
											}}
										/>
									)}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className='flex items-center md:gap-4'>
					<ThemeToggle />

					{/* Desktop CTA Button */}
					<Button asChild className='hidden md:flex'>
						<Link href='/contact'>Get in Touch</Link>
					</Button>

					{/* Mobile Hamburger Menu */}
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild className='md:hidden'>
							<Button variant='ghost' size='icon'>
								<Menu className='h-5 w-5' />
								<span className='sr-only'>Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							side='left'
							className='w-[300px] sm:w-[300px]'
						>
							<div className='flex flex-col h-full'>
								<div className='flex items-center justify-between py-4'>
									<Link
										href='/'
										className='font-bold'
										onClick={() => setOpen(false)}
									>
										<Link href='/' className=' rounded-lg'>
											<Image
												src='https://assets.aceternity.com/logo-dark.png'
												alt='logo'
												width={40}
												height={40}
											/>
										</Link>
									</Link>
								</div>

								<nav className='flex-1 py-8'>
									<ul className='space-y-4'>
										{navLinks.map(link => (
											<li
												key={link.href}
												className='relative'
											>
												<Link
													href={link.href}
													onClick={() =>
														setOpen(false)
													}
													className={`flex items-center p-2 rounded-lg gap-2 transition-colors ${
														isActive(link.href)
															? 'text-primary'
															: 'text-muted-foreground hover:text-primary hover:bg-muted'
													}`}
												>
													<link.icon size={'20px'} />
													<p className='text-base'>
														{link.label}
													</p>

													{isActive(link.href) && (
														<motion.div
															layoutId='mobile-navbar-indicator'
															className='absolute inset-0 bg-muted border rounded-lg -z-10'
															transition={{
																type: 'spring',
																stiffness: 350,
																damping: 30,
															}}
														/>
													)}
												</Link>
											</li>
										))}
									</ul>
								</nav>

								<div className='py-4'>
									<Button asChild className='w-full'>
										<Link
											href='/contact'
											onClick={() => setOpen(false)}
										>
											Get in Touch
										</Link>
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	)
}
