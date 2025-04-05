import { HeroHighlight } from '@/components/ui/hero-highlight'
import { FocusCardsDemo } from './focusdemo'

export default function GalleryPage() {
	return (
		<HeroHighlight>
			<section className='py-24 sm:py-32'>
				<div className='container mx-auto w-full'>
					<h2 className='mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
						Gallery
					</h2>
				</div>
				<FocusCardsDemo />
			</section>
		</HeroHighlight>
	)
}
