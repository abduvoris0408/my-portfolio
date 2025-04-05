import { Button } from '@/components/ui/button'
import { HeroHighlight } from '@/components/ui/hero-highlight'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
	const words = `	I'm a full-stack developer with over 5 years of
								experience building web applications. I
								specialize in React, Next.js, and Node.js,
								creating responsive and performant applications
								that solve real-world problems..My journey in web development began when I built
								my first website for a local business. Since
								then, I've worked with startups and established
								companies to bring their digital visions to
								life.`
	return (
		<HeroHighlight>
			<section className='py-24 sm:py-32'>
				<div className='container'>
					<h2 className='mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
						About Me
					</h2>
					<div className='grid gap-8 md:grid-cols-2'>
						<div className='relative aspect-video overflow-hidden rounded-lg'>
							<Image
								src='/placeholder.svg?height=400&width=600'
								alt='Working on laptop'
								fill
								className='object-cover'
							/>
						</div>
						<div className='space-y-4'>
							<TextGenerateEffect words={words} />
							<Button variant='outline' asChild>
								<Link href='#' download>
									Download Resume
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</HeroHighlight>
	)
}
