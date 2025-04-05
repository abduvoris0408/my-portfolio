import { Button } from '@/components/ui/button'
import { HeroHighlight } from '@/components/ui/hero-highlight'
import { Mail } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
	return (
		<HeroHighlight>
			<section className='py-24 sm:py-32'>
				<div className='container'>
					<div className='mx-auto max-w-2xl'>
						<h2 className='mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Get In Touch
						</h2>
						<div className='mb-8 flex justify-center gap-6'>
							<Link
								href='mailto:hello@example.com'
								className='flex items-center gap-2 text-muted-foreground hover:text-primary'
							>
								<Mail className='h-5 w-5' />
								<span>hello@example.com</span>
							</Link>
						</div>
						<form className='space-y-6'>
							<div className='grid gap-6 sm:grid-cols-2'>
								<div className='space-y-2'>
									<label
										htmlFor='name'
										className='text-sm font-medium'
									>
										Name
									</label>
									<input
										id='name'
										type='text'
										className='w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
										placeholder='Your name'
										required
									/>
								</div>
								<div className='space-y-2'>
									<label
										htmlFor='email'
										className='text-sm font-medium'
									>
										Email
									</label>
									<input
										id='email'
										type='email'
										className='w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
										placeholder='Your email'
										required
									/>
								</div>
							</div>
							<div className='space-y-2'>
								<label
									htmlFor='subject'
									className='text-sm font-medium'
								>
									Subject
								</label>
								<input
									id='subject'
									type='text'
									className='w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
									placeholder='Subject'
									required
								/>
							</div>
							<div className='space-y-2'>
								<label
									htmlFor='message'
									className='text-sm font-medium'
								>
									Message
								</label>
								<textarea
									id='message'
									className='min-h-32 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
									placeholder='Your message'
									required
								/>
							</div>
							<Button type='submit' className='w-full'>
								Send Message
							</Button>
						</form>
					</div>
				</div>
			</section>
		</HeroHighlight>
	)
}
