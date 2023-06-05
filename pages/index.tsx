import React from 'react'
import Link from 'next/link';

export default function Home() {
  const [count, setCount] = React.useState(0);
  return (
    <>
			<section>
				<h1>
					{/*Learn <a href="https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website">Next.js!</a>*/}
					Read<Link href={'/posts/first-post'}>this page!</Link>
				</h1>
				<p>Get started by editing <code>pages/index.js</code></p>
			</section>
		</>
  )
}
