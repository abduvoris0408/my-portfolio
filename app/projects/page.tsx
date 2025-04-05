import { Button } from '@/components/ui/button'
import { HeroHighlight } from '@/components/ui/hero-highlight'
import { ArrowRight, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsPage() {
	return (
		<HeroHighlight>
			<section className='py-24 sm:py-32'>
				<div className='container'>
					<h2 className='mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
						Featured Projects
					</h2>
					<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
						{projects.map(project => (
							<div
								key={project.id}
								className='group relative overflow-hidden rounded-lg border bg-background/50 transition-all hover:shadow-lg'
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
											<span
												key={tech}
												className='rounded-full bg-primary/10 px-3 py-1 text-xs text-primary'
											>
												{tech}
											</span>
										))}
									</div>
									<div className='flex gap-4'>
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
									</div>
								</div>
							</div>
						))}
					</div>
					<div className='mt-12 text-center'>
						<Button variant='outline' asChild>
							<Link href='#'>
								View All Projects{' '}
								<ArrowRight className='ml-2 h-4 w-4' />
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</HeroHighlight>
	)
}

const projects = [
	{
		id: 1,
		title: 'E-commerce Platform',
		description:
			'A full-featured online store with payment processing and inventory management.',
		image: '/placeholder.svg?height=300&width=500',
		technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
		demo: '#',
		github: '#',
	},
	{
		id: 2,
		title: 'Task Management App',
		description:
			'A collaborative task management tool with real-time updates and team features.',
		image: '/placeholder.svg?height=300&width=500',
		technologies: ['React', 'Firebase', 'Redux', 'Material UI'],
		demo: '#',
		github: '#',
	},
	{
		id: 3,
		title: 'Health & Fitness Tracker',
		description:
			'An app to track workouts, nutrition, and health metrics with data visualization.',
		image: '/placeholder.svg?height=300&width=500',
		technologies: ['React Native', 'Node.js', 'MongoDB', 'Chart.js'],
		demo: '#',
		github: '#',
	},
]
