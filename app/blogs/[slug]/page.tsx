// // import Image from 'next/image'
// // import Link from 'next/link'
// // import { notFound } from 'next/navigation'

// // const blogPosts = [
// // 	{
// // 		id: 1,
// // 		slug: 'typescript-yangi-boshlanuvchilar',
// // 		title: "TypeScript: yangi boshlanuvchilar uchun to'liq qo'llanma",
// // 		image: '/images/typescript.jpg',
// // 		date: 'April 15, 2023',
// // 		author: 'Abdulaziz',
// // 		content: `
// //       <p>TypeScript JavaScript-ning kengaytirilgan versiyasi bo'lib, u statik tiplarni qo'llab-quvvatlaydi. Bu dasturchilar uchun kodni yozish va xatolarni topishni osonlashtiradi.</p>

// //       <h2>TypeScript nima?</h2>
// //       <p>TypeScript - bu Microsoft tomonidan ishlab chiqilgan ochiq manbali dasturlash tili bo'lib, u JavaScript-ning to'liq to'plamini o'z ichiga oladi va statik tiplash imkoniyatlarini qo'shadi.</p>

// //       <h2>TypeScript-ning afzalliklari</h2>
// //       <ul>
// //         <li>Statik tiplash</li>
// //         <li>Kod to'ldirish va intellisense</li>
// //         <li>Interfacelar va tiplar</li>
// //         <li>Generiklar</li>
// //         <li>Enum va Tuple tiplar</li>
// //       </ul>

// //       <h2>TypeScript-ni o'rnatish</h2>
// //       <p>TypeScript-ni o'rnatish uchun quyidagi buyruqni ishga tushiring:</p>
// //       <pre><code>npm install -g typescript</code></pre>

// //       <h2>Birinchi TypeScript dasturi</h2>
// //       <p>Keling, oddiy TypeScript dasturini yarataylik:</p>
// //       <pre><code>// greeting.ts
// // function greet(name: string): string {
// //   return \`Hello, \${name}!\`;
// // }

// // console.log(greet("TypeScript"));</code></pre>

// //       <p>Bu kodni kompilyatsiya qilish uchun quyidagi buyruqni ishga tushiring:</p>
// //       <pre><code>tsc greeting.ts</code></pre>

// //       <p>Bu buyruq greeting.js faylini yaratadi, uni Node.js yordamida ishga tushirishingiz mumkin.</p>
// //     `,
// // 	},
// // 	{
// // 		id: 3,
// // 		slug: 'nextjs-zamonaviy-web-dastur',
// // 		title: 'NextJS zamonaviy web dastur',
// // 		image: '/images/nextjs.jpg',
// // 		date: 'March 10, 2023',
// // 		author: 'Sardor',
// // 		content: `
// //       <p>Next.js - bu React-ga asoslangan zamonaviy web dasturlarni yaratish uchun framework. U server-side rendering, static site generation va boshqa ko'plab imkoniyatlarni taqdim etadi.</p>

// //       <h2>Next.js nima?</h2>
// //       <p>Next.js - bu Vercel tomonidan ishlab chiqilgan React frameworki bo'lib, u React dasturlarini yaratish uchun to'liq stack yechimni taqdim etadi.</p>

// //       <h2>Next.js-ning afzalliklari</h2>
// //       <ul>
// //         <li>Server-side rendering (SSR)</li>
// //         <li>Static site generation (SSG)</li>
// //         <li>Incremental static regeneration (ISR)</li>
// //         <li>File-based routing</li>
// //         <li>API routes</li>
// //         <li>Built-in CSS va Sass qo'llab-quvvatlash</li>
// //         <li>Image optimization</li>
// //       </ul>

// //       <h2>Next.js-ni o'rnatish</h2>
// //       <p>Yangi Next.js loyihasini boshlash uchun quyidagi buyruqni ishga tushiring:</p>
// //       <pre><code>npx create-next-app@latest my-next-app</code></pre>

// //       <h2>Next.js-da sahifalar</h2>
// //       <p>Next.js-da sahifalar <code>pages</code> papkasida yaratiladi. Har bir fayl avtomatik ravishda route sifatida ishlaydi.</p>
// //       <pre><code>// pages/index.js
// // export default function Home() {
// //   return (
// //     <div>
// //       <h1>Salom, Next.js!</h1>
// //     </div>
// //   )
// // }</code></pre>

// //       <h2>Next.js-da data fetching</h2>
// //       <p>Next.js turli xil data fetching usullarini taqdim etadi:</p>
// //       <ul>
// //         <li>getStaticProps - build vaqtida ma'lumotlarni olish</li>
// //         <li>getStaticPaths - dinamik routelar uchun</li>
// //         <li>getServerSideProps - har bir so'rov uchun server-side ma'lumotlarni olish</li>
// //       </ul>
// //     `,
// // 	},
// // 	{
// // 		id: 2,
// // 		slug: 'redux-toolkit-qollanma',
// // 		title: "Redux Toolkit qo'llanma",
// // 		image: '/images/redux.jpg',
// // 		date: 'February 20, 2023',
// // 		author: 'Javohir',
// // 		content: `<p>Redux Toolkit - bu Redux-ni ishlatishni osonlashtiruvchi rasmiy kutubxona.</p>`,
// // 	},
// // 	{
// // 		id: 4,
// // 		slug: 'react-19-barcha-kerak',
// // 		title: "React 19: Barcha kerak bo'lgan narsalar bir joyda",
// // 		image: '/images/react.jpg',
// // 		date: 'April 2, 2023',
// // 		author: 'Bobur',
// // 		content: `<p>React 19 yangi imkoniyatlar va yaxshilanishlar bilan kelmoqda.</p>`,
// // 	},
// // ]

// // export default function BlogPostPage({ params }: { params: { slug: string } }) {
// // 	const post = blogPosts.find(post => post.slug === params.slug)

// // 	if (!post) {
// // 		notFound()
// // 	}

// // 	return (
// // 		<div className='min-h-screen bg-white'>
// // 			<div className='flex'>
// // 				<div className='max-w-3xl mx-auto'>
// // 					<Link
// // 						href='/blogs'
// // 						className='inline-flex items-center text-purple-600 mb-6 hover:underline'
// // 					>
// // 						← Bloglar ro'yxatiga qaytish
// // 					</Link>

// // 					<div className='aspect-video relative mb-6 rounded-lg overflow-hidden'>
// // 						<Image
// // 							src={post.image || '/placeholder.svg'}
// // 							alt={post.title}
// // 							fill
// // 							className='object-cover'
// // 						/>
// // 					</div>

// // 					<h1 className='text-3xl font-bold mb-4'>{post.title}</h1>

// // 					<div className='flex items-center gap-4 text-gray-600 mb-8'>
// // 						<span>{post.date}</span>
// // 						<span>•</span>
// // 						<span>Muallif: {post.author}</span>
// // 					</div>

// // 					<div
// // 						className='prose prose-lg max-w-none'
// // 						dangerouslySetInnerHTML={{ __html: post.content }}
// // 					/>
// // 				</div>
// // 			</div>
// // 		</div>
// // 	)
// // }

// 'Use client'
// import { HeroHighlight } from '@/components/ui/hero-highlight'
// import Image from 'next/image'
// import { notFound } from 'next/navigation'

// const blogPosts = [
// 	{
// 		id: 1,
// 		slug: 'typescript-yangi-boshlanuvchilar',
// 		title: "TypeScript: yangi boshlanuvchilar uchun to'liq qo'llanma",
// 		image: '/images/typescript.jpg',
// 		date: 'April 15, 2023',
// 		author: 'Abduvoris',
// 		content: `
//       <p>TypeScript JavaScript-ning kengaytirilgan versiyasi bo'lib, u statik tiplarni qo'llab-quvvatlaydi.</p>

//       <h2>TypeScript-ni o‘rnatish</h2>
//       <div class="code-block">npm install -g typescript</div>

//       <h2>Misol: Oddiy funksiya</h2>
//       <div class="code-block">
// function multiply(a: number, b: number): number {
//   return a * b;
// }
//       </div>

//       <h2>Interface ishlatish</h2>
//       <div class="code-block">
// interface User {
//   name: string;
//   age: number;
// }

// const user: User = {
//   name: "Ali",
//   age: 25,
// };
//       </div>

//       <h2>Generiklar</h2>
//       <div class="code-block">
// function identity&lt;T&gt;(arg: T): T {
//   return arg;
// }
//       </div>

//       <h2>Enum va Tuple</h2>
//       <div class="code-block">
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// const tuple: [string, number] = ["Salom", 42];
//       </div>

//       <h2>Xulosa</h2>
//       <p>TypeScript yordamida loyihangizni yanada barqaror va ishonchli qilishingiz mumkin.</p>
//     `,
// 	},
// ]

// export default function BlogPostPage({ params }: { params: { slug: string } }) {
// 	const post = blogPosts.find(post => post.slug === params.slug)

// 	if (!post) {
// 		notFound()
// 	}

// 	return (
// 		<HeroHighlight>
// 			<div className='container w-full mx-auto   py-24 sm:py-32'>
// 				<div className='relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-6'>
// 					<Image
// 						src={'/typescript.png'}
// 						alt={post.title}
// 						fill
// 						className='object-cover'
// 					/>
// 				</div>

// 				<h1 className='text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-3'>
// 					{post.title}
// 				</h1>

// 				<div className='flex flex-wrap gap-2 sm:gap-4 text-gray-600 dark:text-gray-400 text-sm mb-6'>
// 					<span>{post.date}</span>
// 					<span>•</span>
// 					<span>Muallif: {post.author}</span>
// 				</div>

// 				<div
// 					className='prose prose-sm sm:prose lg:prose-lg max-w-none prose-neutral dark:prose-invert
//           [&_.code-block]:bg-neutral-100 dark:[&_.code-block]:bg-neutral-900
//           [&_.code-block]:rounded-md [&_.code-block]:p-4 [&_.code-block]:font-mono
//           [&_.code-block]:text-sm [&_.code-block]:overflow-x-auto [&_.code-block]:whitespace-pre
//           '
// 					dangerouslySetInnerHTML={{ __html: post.content }}
// 				/>
// 			</div>
// 		</HeroHighlight>
// 	)
// }

'use client'
import { HeroHighlight } from '@/components/ui/hero-highlight'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const blogPosts = [
	{
		id: 1,
		slug: 'typescript-yangi-boshlanuvchilar',
		title: "TypeScript: yangi boshlanuvchilar uchun to'liq qo'llanma",
		image: '/images/typescript.jpg',
		date: 'April 15, 2023',
		author: 'Abduvoris',
		content: `
      <p>TypeScript JavaScript-ning kengaytirilgan versiyasi bo'lib, u statik tiplarni qo'llab-quvvatlaydi.</p>

      <h2>TypeScript-ni o'rnatish</h2>
      <div class="code-block">npm install -g typescript</div>

      <h2>Misol: Oddiy funksiya</h2>
      <div class="code-block">
function multiply(a: number, b: number): number {
  return a * b;
}
      </div>

      <h2>Interface ishlatish</h2>
      <div class="code-block">
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Ali",
  age: 25,
};
      </div>

      <h2>Generiklar</h2>
      <div class="code-block">
function identity&lt;T&gt;(arg: T): T {
  return arg;
}
      </div>

      <h2>Enum va Tuple</h2>
      <div class="code-block">
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const tuple: [string, number] = ["Salom", 42];
      </div>

      <h2>Xulosa</h2>
      <p>TypeScript yordamida loyihangizni yanada barqaror va ishonchli qilishingiz mumkin.</p>
    `,
	},
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
	const post = blogPosts.find(post => post.slug === params.slug)

	if (!post) {
		notFound()
	}

	return (
		<HeroHighlight>
			<div className='px-4 container w-full mx-auto py-16 sm:py-24 md:py-32'>
				{/* Back link - only visible on larger screens */}
				<div className='hidden sm:block mb-6'>
					<Link href='/blogs'>
						<button className='bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block'>
							<span className='absolute inset-0 overflow-hidden rounded-full'>
								<span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
							</span>
							<div className='relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 '>
								<span>Bloglar ro'yhatiga qaytish</span>
								<svg
									fill='none'
									height='16'
									viewBox='0 0 24 24'
									width='16'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M10.75 8.75L14.25 12L10.75 15.25'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='1.5'
									/>
								</svg>
							</div>
							<span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40' />
						</button>
					</Link>
				</div>

				{/* Mobile back button - fixed at the top for easy navigation */}
				<div className='sm:hidden fixed top-0 left-0 right-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm p-3'>
					<Link
						href='/blogs'
						className='inline-flex items-center text-purple-600 hover:underline text-sm'
					>
						← Orqaga
					</Link>
				</div>

				{/* Image container with responsive sizing */}
				<div className='relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-4 sm:mb-6 mt-10 sm:mt-0'>
					<Image
						src={'/typescript.png'}
						alt={post.title}
						fill
						sizes='(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw'
						className='object-cover'
						priority
					/>
				</div>

				{/* Blog title with responsive text size */}
				<h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2 sm:mb-3'>
					{post.title}
				</h1>

				{/* Meta information with responsive spacing and text size */}
				<div className='flex flex-wrap gap-2 sm:gap-4 text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6'>
					<span>{post.date}</span>
					<span>•</span>
					<span>Muallif: {post.author}</span>
				</div>

				{/* Content with improved responsive styling */}
				<div
					className='prose prose-xs sm:prose-sm md:prose lg:prose-lg max-w-none prose-neutral dark:prose-invert
          [&_.code-block]:bg-neutral-100 dark:[&_.code-block]:bg-neutral-900
          [&_.code-block]:rounded-md [&_.code-block]:p-2 sm:[&_.code-block]:p-4 
          [&_.code-block]:font-mono [&_.code-block]:text-xs sm:[&_.code-block]:text-sm 
          [&_.code-block]:overflow-x-auto [&_.code-block]:whitespace-pre
          [&_h2]:text-lg sm:[&_h2]:text-xl md:[&_h2]:text-2xl
          [&_h2]:mt-6 sm:[&_h2]:mt-8 [&_h2]:mb-2 sm:[&_h2]:mb-3
          [&_p]:text-sm sm:[&_p]:text-base'
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>

				{/* Mobile share buttons - fixed at the bottom */}
				<div className='sm:hidden mt-3  rounded-xl bg-white/80 dark:bg-black/80 backdrop-blur-sm p-3 flex justify-between border border-gray-200 dark:border-gray-800'>
					<button className='text-purple-600 text-sm px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30'>
						Ulashish
					</button>
					<button className='text-purple-600 text-sm px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30'>
						Saqlash
					</button>
				</div>

				{/* Add bottom padding to ensure content isn't hidden behind fixed mobile nav */}
				<div className='sm:hidden h-16'></div>
			</div>
		</HeroHighlight>
	)
}
