'use client'

import { Calendar, ChevronLeft, ChevronRight, Info } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

type ActivityData = {
	date: Date
	count: number
	level: number
}

type TimePeriod = 'year' | 'quarter' | 'month'

const generateActivityData = () => {
	const today = new Date()
	const oneYearAgo = new Date(today)
	oneYearAgo.setFullYear(today.getFullYear() - 1)

	const data: ActivityData[] = []
	const currentDate = new Date(oneYearAgo)

	while (currentDate <= today) {
		const count = Math.floor(Math.random() * 10)
		data.push({
			date: new Date(currentDate),
			count,
			level:
				count === 0
					? 0
					: count < 3
					? 1
					: count < 5
					? 2
					: count < 8
					? 3
					: 4,
		})
		currentDate.setDate(currentDate.getDate() + 1)
	}

	return data
}

const formatDate = (date: Date) => {
	return date.toLocaleDateString('en-US', {
		weekday: 'short',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	})
}

export default function GitHubActivityGraph() {
	const [allActivityData, setAllActivityData] = useState<ActivityData[]>([])
	const [filteredData, setFilteredData] = useState<ActivityData[]>([])
	const [isDarkMode, setIsDarkMode] = useState(false)
	const [timePeriod, setTimePeriod] = useState<TimePeriod>('year')
	const [currentDate, setCurrentDate] = useState(new Date())

	useEffect(() => {
		setAllActivityData(generateActivityData())
	}, [])

	useEffect(() => {
		if (allActivityData.length > 0) {
			filterDataByTimePeriod(timePeriod, currentDate)
		}
	}, [allActivityData, timePeriod, currentDate])

	const filterDataByTimePeriod = (period: TimePeriod, date: Date) => {
		const filteredData: ActivityData[] = []
		const year = date.getFullYear()
		const month = date.getMonth()
		const quarter = Math.floor(month / 3)

		allActivityData.forEach(item => {
			const itemYear = item.date.getFullYear()
			const itemMonth = item.date.getMonth()
			const itemQuarter = Math.floor(itemMonth / 3)

			if (period === 'year' && itemYear === year) {
				filteredData.push(item)
			} else if (
				period === 'quarter' &&
				itemYear === year &&
				itemQuarter === quarter
			) {
				filteredData.push(item)
			} else if (
				period === 'month' &&
				itemYear === year &&
				itemMonth === month
			) {
				filteredData.push(item)
			}
		})

		setFilteredData(filteredData)
	}

	const weeks: ActivityData[][] = []
	let currentWeek: ActivityData[] = []

	for (let i = 0; i < filteredData.length; i++) {
		const dayOfWeek = filteredData[i].date.getDay()

		if (dayOfWeek === 0 && currentWeek.length > 0) {
			weeks.push(currentWeek)
			currentWeek = []
		}

		currentWeek.push(filteredData[i])

		if (i === filteredData.length - 1) {
			weeks.push(currentWeek)
		}
	}

	const months = []
	if (filteredData.length > 0) {
		let currentMonth = filteredData[0].date.getMonth()
		let monthStartIndex = 0

		for (let i = 0; i < filteredData.length; i++) {
			const month = filteredData[i].date.getMonth()
			if (month !== currentMonth) {
				months.push({
					name: new Date(filteredData[i - 1].date).toLocaleDateString(
						'en-US',
						{ month: 'short' }
					),
					index: monthStartIndex,
				})
				currentMonth = month
				monthStartIndex = i
			}
		}

		if (filteredData.length > 0) {
			months.push({
				name: new Date(
					filteredData[filteredData.length - 1].date
				).toLocaleDateString('en-US', { month: 'short' }),
				index: monthStartIndex,
			})
		}
	}

	const navigatePeriod = (direction: 'prev' | 'next') => {
		const newDate = new Date(currentDate)

		if (timePeriod === 'year') {
			newDate.setFullYear(
				newDate.getFullYear() + (direction === 'next' ? 1 : -1)
			)
		} else if (timePeriod === 'quarter') {
			newDate.setMonth(
				newDate.getMonth() + (direction === 'next' ? 3 : -3)
			)
		} else if (timePeriod === 'month') {
			newDate.setMonth(
				newDate.getMonth() + (direction === 'next' ? 1 : -1)
			)
		}

		setCurrentDate(newDate)
	}

	const getPeriodLabel = () => {
		const year = currentDate.getFullYear()
		const month = currentDate.getMonth()
		const quarter = Math.floor(month / 3) + 1

		if (timePeriod === 'year') {
			return `${year}`
		} else if (timePeriod === 'quarter') {
			return `Q${quarter} ${year}`
		} else if (timePeriod === 'month') {
			return currentDate.toLocaleDateString('en-US', {
				month: 'long',
				year: 'numeric',
			})
		}

		return ''
	}

	const getDateRangeText = () => {
		if (filteredData.length === 0) return 'No data available'

		return `${formatDate(filteredData[0].date)} - ${formatDate(
			filteredData[filteredData.length - 1].date
		)}`
	}

	return (
		<div className="overflow-x-auto w-full transition-colors my-10">
			<Card className="w-full max-w-4xl mx-auto border shadow-sm dark:bg-gray-900 dark:border-gray-800">
				<CardHeader className="flex flex-col md:flex-row items-center justify-between">
					<div>
						<CardTitle className="text-xl md:text-2xl flex items-center gap-2">
							<Calendar className="h-5 w-5" />
							Contribution Activity
						</CardTitle>
						<CardDescription className="text-sm md:text-base">
							{filteredData.length > 0
								? getDateRangeText()
								: "Loading activity data..."}
						</CardDescription>
					</div>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 w-full">
						<Tabs
							value={timePeriod}
							onValueChange={(value) =>
								setTimePeriod(value as TimePeriod)
							}
							className="w-full md:w-auto"
						>
							<TabsList>
								<TabsTrigger value="year">Year</TabsTrigger>
								<TabsTrigger value="quarter">Quarter</TabsTrigger>
								<TabsTrigger value="month">Month</TabsTrigger>
							</TabsList>
						</Tabs>
	
						<div className="flex items-center gap-2">
							<Button
								variant="outline"
								size="icon"
								onClick={() => navigatePeriod("prev")}
							>
								<ChevronLeft className="h-4 w-4" />
								<span className="sr-only">Previous period</span>
							</Button>
							<div className="font-medium min-w-24 text-center">
								{getPeriodLabel()}
							</div>
							<Button
								variant="outline"
								size="icon"
								onClick={() => navigatePeriod("next")}
							>
								<ChevronRight className="h-4 w-4" />
								<span className="sr-only">Next period</span>
							</Button>
						</div>
					</div>
	
					<div className="overflow-x-auto w-full">
						<div className="min-w-[400px]">
							{filteredData.length > 0 ? (
								<>
									<div className="flex items-center mb-2">
										<div className="w-10"></div>
										<div className="flex-1 flex">
											{months.map((month, i) => (
												<div
													key={i}
													className="text-xs text-muted-foreground"
													style={{
														marginLeft:
															i === 0
																? 0
																: `${
																		Math.max(
																			0,
																			month.index /
																				7 -
																				months[
																					i -
																						1
																				]
																					.index /
																					7 -
																				1
																		) * 12
																	}px`,
													}}
												>
													{month.name}
												</div>
											))}
										</div>
									</div>
	
									<div className="flex">
										<div className="w-10 flex flex-col justify-around text-xs text-muted-foreground">
											<div>Mon</div>
											<div>Wed</div>
											<div>Fri</div>
										</div>
	
										<div className="flex-1 flex flex-wrap gap-1">
											{weeks.map((week, weekIndex) => (
												<div
													key={weekIndex}
													className="flex flex-col gap-1"
												>
													{Array(7)
														.fill(0)
														.map((_, dayIndex) => {
															const day =
																week[dayIndex];
															return (
																<TooltipProvider
																	key={dayIndex}
																>
																	<Tooltip>
																		<TooltipTrigger
																			asChild
																		>
																			<div
																				className={`w-3 h-3 rounded-sm transition-colors ${
																					!day
																						? "bg-gray-200 dark:bg-gray-800"
																						: day.level ===
																							0
																						? "bg-gray-200 dark:bg-gray-800"
																						: day.level ===
																							1
																						? "bg-emerald-200 dark:bg-emerald-900"
																						: day.level ===
																							2
																						? "bg-emerald-300 dark:bg-emerald-700"
																						: day.level ===
																							3
																						? "bg-emerald-500 dark:bg-emerald-500"
																						: "bg-emerald-700 dark:bg-emerald-300"
																				}`}
																			></div>
																		</TooltipTrigger>
																		{day && (
																			<TooltipContent
																				side="top"
																				className="text-xs"
																			>
																				{
																					day.count
																				}{" "}
																				contributions
																				on{" "}
																				{formatDate(
																					day.date
																				)}
																			</TooltipContent>
																		)}
																	</Tooltip>
																</TooltipProvider>
															);
														})}
												</div>
											))}
										</div>
									</div>
								</>
							) : (
								<div className="py-12 text-center text-muted-foreground">
									No activity data available for this time period
								</div>
							)}
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
	
}
