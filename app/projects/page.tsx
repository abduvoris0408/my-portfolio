// import { Button } from '@/components/ui/button'
// import { HeroHighlight } from '@/components/ui/hero-highlight'
// import { ArrowRight, Github } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'

// export default function ProjectsPage() {
// 	return (
// 		<HeroHighlight>
// 			<section className='py-24 sm:py-32'>
// 				<div className='container'>
// 					<h2 className='mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
// 						Featured Projects
// 					</h2>
// 					<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
// 						{projects.map(project => (
// 							<div
// 								key={project.id}
// 								className='group relative overflow-hidden rounded-lg border bg-background/50 transition-all hover:shadow-lg'
// 							>
// 								<div className='aspect-video relative overflow-hidden'>
// 									<Image
// 										src={
// 											project.image || '/placeholder.svg'
// 										}
// 										alt={project.title}
// 										fill
// 										className='object-cover transition-transform duration-300 group-hover:scale-105'
// 									/>
// 								</div>
// 								<div className='p-6'>
// 									<h3 className='mb-2 text-xl font-bold'>
// 										{project.title}
// 									</h3>
// 									<p className='mb-4 text-muted-foreground'>
// 										{project.description}
// 									</p>
// 									<div className='flex flex-wrap gap-2 mb-4'>
// 										{project.technologies.map(tech => (
// 											<span
// 												key={tech}
// 												className='rounded-full bg-primary/10 px-3 py-1 text-xs text-primary'
// 											>
// 												{tech}
// 											</span>
// 										))}
// 									</div>
// 									<div className='flex gap-4'>
// 										<Button
// 											size='sm'
// 											variant='outline'
// 											asChild
// 										>
// 											<Link
// 												href={project.demo}
// 												target='_blank'
// 												rel='noopener noreferrer'
// 											>
// 												Live Demo
// 											</Link>
// 										</Button>
// 										<Button
// 											size='sm'
// 											variant='ghost'
// 											asChild
// 										>
// 											<Link
// 												href={project.github}
// 												target='_blank'
// 												rel='noopener noreferrer'
// 											>
// 												<Github className='mr-2 h-4 w-4' />{' '}
// 												Code
// 											</Link>
// 										</Button>
// 									</div>
// 								</div>
// 							</div>
// 						))}
// 					</div>
// 					<div className='mt-12 text-center'>
// 						<Button variant='outline' asChild>
// 							<Link href='#'>
// 								View All Projects{' '}
// 								<ArrowRight className='ml-2 h-4 w-4' />
// 							</Link>
// 						</Button>
// 					</div>
// 				</div>
// 			</section>
// 		</HeroHighlight>
// 	)
// }

// const projects = [
// 	{
// 		id: 1,
// 		title: 'E-commerce Platform',
// 		description:
// 			'A full-featured online store with payment processing and inventory management.',
// 		image: '/placeholder.svg?height=300&width=500',
// 		technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
// 		demo: '#',
// 		github: '#',
// 	},
// 	{
// 		id: 2,
// 		title: 'Task Management App',
// 		description:
// 			'A collaborative task management tool with real-time updates and team features.',
// 		image: '/placeholder.svg?height=300&width=500',
// 		technologies: ['React', 'Firebase', 'Redux', 'Material UI'],
// 		demo: '#',
// 		github: '#',
// 	},
// 	{
// 		id: 3,
// 		title: 'Health & Fitness Tracker',
// 		description:
// 			'An app to track workouts, nutrition, and health metrics with data visualization.',
// 		image: '/placeholder.svg?height=300&width=500',
// 		technologies: ['React Native', 'Node.js', 'MongoDB', 'Chart.js'],
// 		demo: '#',
// 		github: '#',
// 	},
// ]
'use client'

import { Button } from '@/components/ui/button'
import { HeroHighlight } from '@/components/ui/hero-highlight'
import { motion } from 'framer-motion'
import { ArrowRight, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsPage() {
	// Animation variants
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	}

	const item = {
		hidden: { opacity: 0, y: 20, scale: 0.95 },
		show: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 80,
				damping: 12,
			},
		},
	}

	const cardVariants = {
		hidden: { opacity: 0, y: 30, scale: 0.9 },
		show: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 70,
				damping: 14,
			},
		},
		hover: {
			y: -8,
			boxShadow:
				'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 20,
			},
		},
	}

	const buttonVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		show: {
			opacity: 1,
			scale: 1,
			transition: {
				delay: 0.6,
				type: 'spring',
				stiffness: 100,
				damping: 15,
			},
		},
		hover: {
			scale: 1.05,
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 10,
			},
		},
		tap: {
			scale: 0.98,
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
						Featured Projects
					</motion.h2>

					<motion.div
						className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'
						variants={container}
					>
						{projects.map((project, index) => (
							<motion.div
								key={project.id}
								className='group relative overflow-hidden rounded-lg border bg-background/50 transition-all'
								variants={cardVariants}
								whileHover='hover'
								custom={index}
								transition={{
									delay: index * 0.1,
								}}
							>
								<div className='aspect-video relative overflow-hidden'>
									<Image
										src={
											project.image || '/placeholder.svg'
										}
										alt={project.title}
										fill
										className='object-cover transition-transform duration-300 group-hover:scale-105'
									/>
								</div>
								<div className='p-6'>
									<h3 className='mb-2 text-xl font-bold'>
										{project.title}
									</h3>
									<p className='mb-4 text-muted-foreground'>
										{project.description}
									</p>
									<div className='flex flex-wrap gap-2 mb-4'>
										{project.technologies.map(tech => (
											<motion.span
												key={tech}
												className='rounded-full bg-primary/10 px-3 py-1 text-xs text-primary'
												whileHover={{
													scale: 1.05,
													backgroundColor:
														'rgba(var(--primary), 0.2)',
												}}
											>
												{tech}
											</motion.span>
										))}
									</div>
									<div className='flex gap-4'>
										<motion.div
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.98 }}
										>
											<Button
												size='sm'
												variant='outline'
												asChild
											>
												<Link
													href={project.demo}
													target='_blank'
													rel='noopener noreferrer'
												>
													Live Demo
												</Link>
											</Button>
										</motion.div>
										<motion.div
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.98 }}
										>
											<Button
												size='sm'
												variant='ghost'
												asChild
											>
												<Link
													href={project.github}
													target='_blank'
													rel='noopener noreferrer'
												>
													<Github className='mr-2 h-4 w-4' />{' '}
													Code
												</Link>
											</Button>
										</motion.div>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>

					<motion.div
						className='mt-12 text-center'
						variants={buttonVariants}
						whileHover='hover'
						whileTap='tap'
					>
						<Button variant='outline' asChild>
							<Link href='https://github.com/abduvoris0408'>
								View All Projects{' '}
								<motion.span
									animate={{ x: [0, 5, 0] }}
									transition={{
										repeat: Number.POSITIVE_INFINITY,
										repeatType: 'reverse',
										duration: 1.5,
										ease: 'easeInOut',
									}}
								>
									<ArrowRight className='ml-2 h-4 w-4' />
								</motion.span>
							</Link>
						</Button>
					</motion.div>
				</motion.div>
			</section>
		</HeroHighlight>
	)
}

const projects = [
	{
		id: 1,
		title: 'Blog praktikum',
		description:
			'  Taking control of your daily life is easy when you know how!.',
		image: '/project1.png',
		technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
		demo: 'https://blog-praktikum.vercel.app/',
		github: 'https://github.com/abduvoris0408/blog.praktikum',
	},
	{
		id: 2,
		title: 'BMB Renovation',
		description:
			'A collaborative task management tool with real-time updates and team features.',
		image: '/project2.png',
		technologies: ['React', 'Next', 'Redux', 'Material UI'],
		demo: 'https://bmb-renovation.vercel.app/',
		github: 'https://github.com/abduvoris0408/bmb-renovation',
	},
	{
		id: 3,
		title: 'Smart Navbat',
		description: "Tez va osonlashtirilgan navbat tizimi O'zbekistonda",
		image: '/project3.png',
		technologies: ['React Native', 'Node.js', 'MongoDB', 'Chart.js'],
		demo: 'https://smart-navbatuz.vercel.app/',
		github: 'https://github.com/abduvoris0408/smart-navbat',
	},
]
