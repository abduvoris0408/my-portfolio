// import { HeroHighlight } from '@/components/ui/hero-highlight'
// import { FocusCardsDemo } from './focusdemo'

// export default function GalleryPage() {
// 	return (
// 		<HeroHighlight>
// 			<section className='py-24 sm:py-32'>
// 				<div className='container mx-auto w-full'>
// 					<h2 className='mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
// 						Gallery
// 					</h2>
// 				</div>
// 				<FocusCardsDemo />
// 			</section>
// 		</HeroHighlight>
// 	)
// }
"use client"

import { HeroHighlight } from "@/components/ui/hero-highlight"
import { FocusCardsDemo } from "./focusdemo"
import { motion } from "framer-motion"

export default function GalleryPage() {
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
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  }

  const focusCardsVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <HeroHighlight>
      <motion.section className="py-24 sm:py-32" initial="hidden" animate="show" variants={container}>
        <motion.div className="container mx-auto w-full" variants={item}>
          <motion.h2
            className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            variants={item}
            whileInView={{
              scale: [1, 1.03, 1],
              transition: {
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: 0,
              },
            }}
          >
            Gallery
          </motion.h2>
        </motion.div>

        <motion.div variants={focusCardsVariants} initial="hidden" animate="show">
          <FocusCardsDemo />
        </motion.div>
      </motion.section>
    </HeroHighlight>
  )
}

