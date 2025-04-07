export default function SkillsPage() {
	return (
		<section className='py-24 sm:py-32'>
			<div>
				<h2 className='mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
					Skills & Expertise
				</h2>
				<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
					{skillCategories.map(category => (
						<div
							key={category.name}
							className='rounded-lg border bg-background/50 p-6 '
						>
							<h3 className='mb-4 text-xl font-bold'>
								{category.name}
							</h3>
							<div className='space-y-2'>
								{category.skills.map(skill => (
									<div key={skill.name} className='space-y-1'>
										<div className='flex justify-between'>
											<span>{skill.name}</span>
											<span className='text-muted-foreground'>
												{skill.level}%
											</span>
										</div>
										<div className='h-2 w-full overflow-hidden rounded-full bg-muted'>
											<div
												className='h-full rounded-full bg-primary'
												style={{
													width: `${skill.level}%`,
												}}
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

const skillCategories = [
	{
		name: 'Frontend',
		skills: [
			{ name: 'React', level: 95 },
			{ name: 'Next.js', level: 90 },
			{ name: 'TypeScript', level: 85 },
			{ name: 'Tailwind CSS', level: 90 },
		],
	},

	{
		name: 'Other',
		skills: [
			{ name: 'Git & GitHub', level: 90 },
			{ name: 'Docker', level: 75 },
			{ name: 'AWS', level: 65 },
			{ name: 'UI/UX Design', level: 80 },
		],
	},
]
