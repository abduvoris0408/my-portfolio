// import { EvervaultCard, Icon } from '@/components/ui/evervault-card'
// import { HeroHighlight } from '@/components/ui/hero-highlight'
// import Image from 'next/image'
// import Link from 'next/link'

// const blogPosts = [
// 	{
// 		id: 1,
// 		slug: 'typescript-yangi-boshlanuvchilar',
// 		title: "TypeScript: yangi boshlanuvchilar uchun to'liq qo'llanma",
// 		image: '/typescript.png',
// 	},
// 	{
// 		id: 3,
// 		slug: '/',
// 		title: "Next JS: yangi boshlanuvchilar uchun to'liq qo'llanma",
// 		image: '/next.png',
// 	},
// ]

// export default function BlogsPage() {
// 	return (
// 		<HeroHighlight>
// 			<div className='container mx-auto text-foreground'>
// 				<div className='py-24 sm:py-32'>
// 					<div className='flex-1'>
// 						<div>
// 							<h2 className='mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
// 								Blogs
// 							</h2>
// 							<div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
// 								{blogPosts.map(post => (
// 									<Link
// 										key={post.id}
// 										href={`/blogs/${post.slug}`}
// 										className='border bg-background border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[25rem] hover:shadow-lg transition-shadow'
// 									>
// 										<Icon className='absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black' />
// 										<Icon className='absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black' />
// 										<Icon className='absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black' />
// 										<Icon className='absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black' />

// 										<div className='relative w-full h-[300px] sm:h-[250px] mb-4'>
// 											<Image
// 												src={
// 													post.image ||
// 													'/placeholder.svg'
// 												}
// 												alt={post.title}
// 												layout='fill'
// 												objectFit='cover'
// 												className='rounded-md'
// 											/>
// 										</div>

// 										{/* Hover effect and Card Content */}
// 										<div className='absolute inset-0 flex items-center justify-center transition-opacity opacity-0 hover:opacity-100'>
// 											<EvervaultCard text='Click me' />
// 										</div>

// 										<h2 className='dark:text-white text-black mt-4 text-sm font-light'>
// 											{post.title}
// 										</h2>

// 										{post.slug === '/' && (
// 											<p className='text-sm font-medium mt-2 text-red-500'>
// 												Coming Soon!
// 											</p>
// 										)}

// 										<p className='text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5'>
// 											Watch me hover
// 										</p>
// 									</Link>
// 								))}
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</HeroHighlight>
// 	)
// }

'use client'

import { EvervaultCard, Icon } from '@/components/ui/evervault-card'
import { HeroHighlight } from '@/components/ui/hero-highlight'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
	{
		id: 1,
		slug: 'typescript-yangi-boshlanuvchilar',
		title: "TypeScript: yangi boshlanuvchilar uchun to'liq qo'llanma",
		image: '/typescript.png',
	},
	{
		id: 3,
		slug: '/',
		title: "Next JS: yangi boshlanuvchilar uchun to'liq qo'llanma",
		image: '/next.png',
	},
]

export default function BlogsPage() {
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
			scale: 1.03,
			boxShadow:
				'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 20,
			},
		},
	}

	const iconVariants = {
		hidden: { opacity: 0, scale: 0 },
		show: {
			opacity: 1,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 300,
				damping: 20,
				delay: 0.3,
			},
		},
		hover: {
			rotate: [0, 15, -15, 0],
			transition: {
				duration: 0.5,
			},
		},
	}

	const badgeVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		show: {
			opacity: 1,
			scale: 1,
			transition: {
				delay: 0.5,
				type: 'spring',
				stiffness: 200,
				damping: 15,
			},
		},
		hover: {
			scale: 1.1,
			backgroundColor: 'rgba(0, 0, 0, 0.05)',
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 10,
			},
		},
	}

	return (
		<HeroHighlight>
			<div className='container mx-auto text-foreground'>
				<div className='py-24 sm:py-32'>
					<div className='flex-1'>
						<motion.div
							variants={container}
							initial='hidden'
							animate='show'
							viewport={{ once: true }}
						>
							<motion.h2
								className='mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'
								variants={item}
							>
								Blogs
							</motion.h2>

							<motion.div
								className='grid grid-cols-1 sm:grid-cols-3 gap-6'
								variants={container}
							>
								{blogPosts.map((post, index) => (
									<motion.div
										key={post.id}
										variants={cardVariants}
										whileHover='hover'
										custom={index}
										transition={{
											delay: index * 0.1,
										}}
									>
										<Link
											href={`/blogs/${post.slug}`}
											className='border bg-background border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[25rem] transition-all '
										>
											<Icon className='absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black' />
											<Icon className='absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black' />
											<Icon className='absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black' />
											<Icon className='absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black' />
											<motion.div
												variants={iconVariants}
												whileHover='hover'
												className='absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black'
											></motion.div>
											<motion.div
												variants={iconVariants}
												whileHover='hover'
												className='absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black'
											></motion.div>
											<motion.div
												variants={iconVariants}
												whileHover='hover'
												className='absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black'
											></motion.div>
											<motion.div
												variants={iconVariants}
												whileHover='hover'
												className='absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black'
											></motion.div>

											<motion.div
												className='relative w-full h-[300px] sm:h-[250px] mb-4 overflow-hidden rounded-md'
												whileHover={{ scale: 1.05 }}
												transition={{ duration: 0.3 }}
											>
												<Image
													src={
														post.image ||
														'/placeholder.svg'
													}
													alt={post.title}
													layout='fill'
													objectFit='cover'
													className='rounded-md transition-transform duration-300'
												/>
											</motion.div>

											{/* Hover effect and Card Content */}
											<div className='absolute inset-0 flex items-center justify-center transition-opacity opacity-0 hover:opacity-100'>
												<EvervaultCard text='Click me' />
											</div>

											<motion.h2
												className='dark:text-white text-black mt-4 text-sm font-light'
												initial={{ opacity: 0, y: 10 }}
												animate={{
													opacity: 1,
													y: 0,
													transition: {
														delay:
															0.3 + index * 0.1,
														duration: 0.5,
													},
												}}
											>
												{post.title}
											</motion.h2>

											{post.slug === '/' && (
												<motion.p
													className='text-sm font-medium mt-2 text-red-500'
													initial={{ opacity: 0 }}
													animate={{
														opacity: 1,
														transition: {
															delay:
																0.5 +
																index * 0.1,
															duration: 0.5,
														},
													}}
													whileHover={{
														scale: 1.05,
														transition: {
															duration: 0.2,
														},
													}}
												>
													Coming Soon!
												</motion.p>
											)}

											<motion.p
												className='text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5'
												variants={badgeVariants}
												whileHover='hover'
											>
												Watch me hover
											</motion.p>
										</Link>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
		</HeroHighlight>
	)
}
