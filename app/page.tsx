// import GitHubActivitySection from '@/components/githubgraph'
// import { Button } from '@/components/ui/button'
// import { Cover } from '@/components/ui/cover'
// import { HeroHighlight } from '@/components/ui/hero-highlight'
// import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
// import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'

// export default function Home() {
// 	const words = `A passionate full-stack developer creating
// 									beautiful, functional, and user-friendly
// 									digital experiences.`
// 	return (
// 		<HeroHighlight>
// 			<div className='flex  flex-col'>
// 				<div className='flex-1'>
// 					<section className='container py-[100px] sm:py-36'>
// 						<div className='grid items-center gap-8 md:grid-cols-2'>
// 							<div className='space-y-6'>
// 								<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
// 									<Cover>Hi, I'm</Cover>
// 									<span className='text-'>
// 										<Cover>Abduvoris Mo'minov</Cover>
// 									</span>
// 								</h1>
// 								<TextGenerateEffect words={words} />

// 								<div className='flex gap-4'>
// 									<Button asChild>
// 										<Link href='/projects'>
// 											View My Work{' '}
// 											<ArrowRight className='ml-2 h-4 w-4' />
// 										</Link>
// 									</Button>
// 									<Button variant='outline' asChild>
// 										<Link href='/contact'>Contact Me</Link>
// 									</Button>
// 								</div>
// 								<div className='flex gap-4'>
// 									<Link
// 										href='https://github.com'
// 										target='_blank'
// 										rel='noopener noreferrer'
// 									>
// 										<Github className='h-6 w-6 text-muted-foreground hover:text-primary' />
// 										<span className='sr-only'>GitHub</span>
// 									</Link>
// 									<Link
// 										href='https://linkedin.com'
// 										target='_blank'
// 										rel='noopener noreferrer'
// 									>
// 										<Linkedin className='h-6 w-6 text-muted-foreground hover:text-primary' />
// 										<span className='sr-only'>
// 											LinkedIn
// 										</span>
// 									</Link>
// 									<Link
// 										href='https://twitter.com'
// 										target='_blank'
// 										rel='noopener noreferrer'
// 									>
// 										<Twitter className='h-6 w-6 text-muted-foreground hover:text-primary' />
// 										<span className='sr-only'>Twitter</span>
// 									</Link>
// 								</div>
// 							</div>
// 							<div className='relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border-4 border-primary'>
// 								<Image
// 									src='/placeholder.svg?height=600&width=600'
// 									alt='Portrait'
// 									fill
// 									className='object-cover'
// 									priority
// 								/>
// 							</div>
// 						</div>
// 						<GitHubActivitySection />
// 					</section>
// 				</div>
// 			</div>
// 		</HeroHighlight>
// 	)
// }

'use client'

import GitHubActivitySection from '@/components/githubgraph'
import Globe from '@/components/Globe'
import { Button } from '@/components/ui/button'
import { Cover } from '@/components/ui/cover'
import { HeroHighlight } from '@/components/ui/hero-highlight'
import { Typewriter } from '@/components/ui/typewriter-effect'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { FaTelegramPlane } from 'react-icons/fa'

export default function Home() {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	}

	const item = {
		hidden: { opacity: 0, scale: 0.9 },
		show: {
			opacity: 1,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 15,
			},
		},
	}

	const socialItem = {
		hidden: { scale: 0, opacity: 0 },
		show: {
			scale: 1,
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 260,
				damping: 20,
			},
		},
	}

	const imageAnimation = {
		hidden: { scale: 0.8, opacity: 0 },
		show: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	}

	return (
		<HeroHighlight>
			<div className='flex flex-col'>
				<div className='flex-1'>
					<section className='container py-[100px] sm:py-36'>
						<motion.div
							className='grid items-center gap-8 md:grid-cols-2'
							variants={container}
							initial='hidden'
							animate='show'
						>
							<div className='space-y-6'>
								<motion.div variants={item}>
									<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
										<Cover>Hi, I'm</Cover>
										<span className='text-'>
											<Cover>Abduvoris Mo'minov</Cover>
										</span>
									</h1>
								</motion.div>

								<div>
									{' '}
									<Typewriter
										text={[
											'A passionate Front End developer creating beautiful, functional, and user-friendly digital experiences.',
										]}
										speed={40}
										delay={2000}
										loop={false}
										className='text-muted-foreground text-2xl'
									/>
								</div>
								<motion.div
									variants={item}
									className='flex gap-4'
								>
									<Button asChild>
										<Link href='/projects'>
											View My Work{' '}
											<ArrowRight className='ml-2 h-4 w-4' />
										</Link>
									</Button>
									<Button variant='outline' asChild>
										<Link href='/contact'>Contact Me</Link>
									</Button>
								</motion.div>

								<motion.div
									className='flex gap-4'
									variants={container}
									initial='hidden'
									animate='show'
								>
									<motion.div variants={socialItem}>
										<Link
											href='https://github.com/abduvoris0408'
											target='_blank'
											rel='noopener noreferrer'
										>
											<Github className='h-6 w-6 text-muted-foreground hover:text-primary transition-colors duration-300' />
											<span className='sr-only'>
												GitHub
											</span>
										</Link>
									</motion.div>
									<motion.div variants={socialItem}>
										<Link
											href='https://instagrom.com/abduvoris_mominov'
											target='_blank'
											rel='noopener noreferrer'
										>
											<Instagram className='h-6 w-6 text-muted-foreground hover:text-primary transition-colors duration-300' />
											<span className='sr-only'>
												Instagrm
											</span>
										</Link>
									</motion.div>

									<motion.div variants={socialItem}>
										<Link
											href="https://linkedin.com/AbduvorisMo'minov"
											target='_blank'
											rel='noopener noreferrer'
										>
											<Linkedin className='h-6 w-6 text-muted-foreground hover:text-primary transition-colors duration-300' />
											<span className='sr-only'>
												LinkedIn
											</span>
										</Link>
									</motion.div>

									<motion.div variants={socialItem}>
										<Link
											href='https://t.me/Abduvoris_Mominov'
											target='_blank'
										>
											<FaTelegramPlane className='h-6 w-6 text-muted-foreground hover:text-primary transition-colors duration-300' />
											<span className='sr-only'>
												Telegram
											</span>
										</Link>
									</motion.div>
								</motion.div>
							</div>

							<motion.div
								className='relative mx-auto aspect-square w-full max-w-md overflow-hidden'
								variants={imageAnimation}
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.3 },
								}}
							>
								<Globe />
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{
								opacity: 1,
								y: 0,
								transition: {
									delay: 1.2,
									duration: 0.8,
								},
							}}
						>
							<GitHubActivitySection />
						</motion.div>
					</section>
				</div>
			</div>
		</HeroHighlight>
	)
}
