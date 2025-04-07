// import { Button } from '@/components/ui/button'
// import { HeroHighlight } from '@/components/ui/hero-highlight'
// import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
// import Image from 'next/image'
// import Link from 'next/link'
// import SkillsPage from './skillpage'

// export default function AboutPage() {
// 	const words = `	I'm a full-stack developer with over 5 years of
// 								experience building web applications. I
// 								specialize in React, Next.js, and Node.js,
// 								creating responsive and performant applications
// 								that solve real-world problems..My journey in web development began when I built
// 								my first website for a local business. Since
// 								then, I've worked with startups and established
// 								companies to bring their digital visions to
// 								life.`
// 	return (
// 		<HeroHighlight>
// 			<section className='py-24 sm:py-32'>
// 				<div className='container'>
// 					<h2 className='mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
// 						About Me
// 					</h2>
// 					<div className='grid gap-8 md:grid-cols-2'>
// 						<div className='relative aspect-video overflow-hidden rounded-lg'>
// 							<Image
// 								src='/placeholder.svg?height=400&width=600'
// 								alt='Working on laptop'
// 								fill
// 								className='object-cover'
// 							/>
// 						</div>
// 						<div className='space-y-4'>
// 							<TextGenerateEffect words={words} />
// 							<Button variant='outline' asChild>
// 								<Link href='#' download>
// 									Download Resume
// 								</Link>
// 							</Button>
// 						</div>
// 					</div>

// 					<SkillsPage />
// 				</div>
// 			</section>
// 		</HeroHighlight>
// 	)
// }

'use client'

import { Button } from '@/components/ui/button'
import { HeroHighlight } from '@/components/ui/hero-highlight'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SkillsPage from './skillpage'

export default function AboutPage() {
	const words = `I'm a full-stack developer with over 1 years of
                experience building web applications. I
                specialize in React, Next.js, and Node.js,
                creating responsive and performant applications
                that solve real-world problems..My journey in web development began when I built
                my first website for a local business. Since
                then, I've worked with startups and established
                companies to bring their digital visions to
                life.`

	// Animation variants
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	}

	const item = {
		hidden: { opacity: 0, scale: 0.9, y: 20 },
		show: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 15,
			},
		},
	}

	const imageAnimation = {
		hidden: { scale: 0.8, opacity: 0 },
		show: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.7,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	}

	return (
		<HeroHighlight>
			<section className='py-24 sm:py-32'>
				<motion.div
					className='container'
					variants={container}
					initial='hidden'
					animate='show'
					viewport={{ once: true }}
				>
					<motion.h2
						className='mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'
						variants={item}
					>
						About Me
					</motion.h2>

					<div className='grid gap-8 md:grid-cols-2'>
						<motion.div
							className='relative aspect-video overflow-hidden rounded-lg'
							variants={imageAnimation}
							whileHover={{
								scale: 1.03,
								transition: { duration: 0.3 },
							}}
						>
							<Image
								src='/my-image.jpg'
								alt='Working on laptop'
								fill
								className='object-cover'
							/>
						</motion.div>

						<motion.div className='space-y-4' variants={item}>
							<TextGenerateEffect words={words} />
							<motion.div
								variants={item}
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.2 },
								}}
								whileTap={{ scale: 0.98 }}
							>
								<Button variant='outline' asChild>
									<Link href='#' download>
										Download Resume
									</Link>
								</Button>
							</motion.div>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: {
								delay: 0.6,
								duration: 0.8,
								ease: [0.16, 1, 0.3, 1],
							},
						}}
					>
						<SkillsPage />
					</motion.div>
				</motion.div>
			</section>
		</HeroHighlight>
	)
}
