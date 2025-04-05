// import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
// import Link from 'next/link'

// export default function Footer() {
// 	return (
// 		<footer className='border-t'>
// 			<div className='container py-8'>
// 				<div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
// 					<p className='text-center text-sm text-muted-foreground md:text-left'>
// 						© {new Date().getFullYear()}.Abduvoris Mo'minov. All
// 						rights reserved.
// 					</p>
// 					<div className='flex gap-4'>
// 						<Link
// 							href='https://github.com'
// 							target='_blank'
// 							rel='noopener noreferrer'
// 						>
// 							<Github className='h-5 w-5 text-muted-foreground hover:text-primary' />
// 							<span className='sr-only'>GitHub</span>
// 						</Link>
// 						<Link
// 							href='https://linkedin.com'
// 							target='_blank'
// 							rel='noopener noreferrer'
// 						>
// 							<Linkedin className='h-5 w-5 text-muted-foreground hover:text-primary' />
// 							<span className='sr-only'>LinkedIn</span>
// 						</Link>
// 						<Link
// 							href='https://twitter.com'
// 							target='_blank'
// 							rel='noopener noreferrer'
// 						>
// 							<Twitter className='h-5 w-5 text-muted-foreground hover:text-primary' />
// 							<span className='sr-only'>Twitter</span>
// 						</Link>
// 						<Link href='mailto:hello@example.com'>
// 							<Mail className='h-5 w-5 text-muted-foreground hover:text-primary' />
// 							<span className='sr-only'>Email</span>
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</footer>
// 	)
// }
import Tooltip from '@mui/material/Tooltip' // MUI Tooltip import qilish
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='border-t'>
			<div className='container py-8'>
				<div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
					<p className='text-center text-sm text-muted-foreground md:text-left'>
						© {new Date().getFullYear()}. Abduvoris Mo'minov. All
						rights reserved.
					</p>
					<div className='flex gap-4'>
						{/* GitHub uchun Tooltip */}
						<Tooltip
							title='GitHub'
							arrow
							sx={{ backgroundColor: 'white', color: 'black' }}
						>
							<Link
								href='https://github.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Github className='h-5 w-5 text-muted-foreground hover:text-primary' />
								<span className='sr-only'>GitHub</span>
							</Link>
						</Tooltip>

						{/* LinkedIn uchun Tooltip */}
						<Tooltip title='LinkedIn' arrow>
							<Link
								href='https://linkedin.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Linkedin className='h-5 w-5 text-muted-foreground hover:text-primary' />
								<span className='sr-only'>LinkedIn</span>
							</Link>
						</Tooltip>

						{/* Twitter uchun Tooltip */}
						<Tooltip title='Twitter' arrow>
							<Link
								href='https://twitter.com'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Twitter className='h-5 w-5 text-muted-foreground hover:text-primary' />
								<span className='sr-only'>Twitter</span>
							</Link>
						</Tooltip>

						{/* Email uchun Tooltip */}
						<Tooltip title='Email' arrow>
							<Link href='mailto:hello@example.com'>
								<Mail className='h-5 w-5 text-muted-foreground hover:text-primary' />
								<span className='sr-only'>Email</span>
							</Link>
						</Tooltip>
					</div>
				</div>
			</div>
		</footer>
	)
}
