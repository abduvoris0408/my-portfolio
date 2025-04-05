import '@/app/globals.css'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import type React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Abduvoris Portfolio | Full-Stack Developer',
	description:
		'Professional portfolio of Abduvoris, a full-stack developer specializing in React, Next.js, and Node.js',
		icons:'https://assets.aceternity.com/logo-dark.png'
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
				>
					<div className='flex min-h-screen flex-col'>
						<NextTopLoader />
						<Navbar />
						{children}
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}

import './globals.css'
