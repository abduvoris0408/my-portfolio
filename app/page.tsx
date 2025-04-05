import { Button } from '@/components/ui/button'
import { Cover } from '@/components/ui/cover'
import { HeroHighlight } from '@/components/ui/hero-highlight'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	const words = `A passionate full-stack developer creating
									beautiful, functional, and user-friendly
									digital experiences.`
	return (
		<HeroHighlight>
			<div className='flex min-h-screen flex-col'>
				<div className='flex-1'>
					<section className='container py-[100px] sm:py-36'>
						<div className='grid items-center gap-8 md:grid-cols-2'>
							<div className='space-y-6'>
								<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
									<Cover>Hi, I'm</Cover>
									<span className='text-primary'>
										<Cover>Abduvoris Mo'minov</Cover>
									</span>
								</h1>
								<TextGenerateEffect words={words} />

								<div className='flex gap-4'>
									<Button asChild>
										<Link href='/projects'>
											View My Work{' '}
											<ArrowRight className='ml-2 h-4 w-4' />
										</Link>
									</Button>
									<Button variant='outline' asChild>
										<Link href='/contact'>Contact Me</Link>
									</Button>
								</div>
								<div className='flex gap-4'>
									<Link
										href='https://github.com'
										target='_blank'
										rel='noopener noreferrer'
									>
										<Github className='h-6 w-6 text-muted-foreground hover:text-primary' />
										<span className='sr-only'>GitHub</span>
									</Link>
									<Link
										href='https://linkedin.com'
										target='_blank'
										rel='noopener noreferrer'
									>
										<Linkedin className='h-6 w-6 text-muted-foreground hover:text-primary' />
										<span className='sr-only'>
											LinkedIn
										</span>
									</Link>
									<Link
										href='https://twitter.com'
										target='_blank'
										rel='noopener noreferrer'
									>
										<Twitter className='h-6 w-6 text-muted-foreground hover:text-primary' />
										<span className='sr-only'>Twitter</span>
									</Link>
								</div>
							</div>
							<div className='relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border-4 border-primary'>
								<Image
									src='/placeholder.svg?height=600&width=600'
									alt='Portrait'
									fill
									className='object-cover'
									priority
								/>
							</div>
						</div>
						{/* <GitHubActivityGraph /> */}
					</section>
				</div>
			</div>
		</HeroHighlight>
	)
}
