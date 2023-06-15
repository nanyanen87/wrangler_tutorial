import React from 'react'
import Link from 'next/link';
import {GetStaticProps} from "next";

type Props = {
	resString: string;
};
export const getStaticProps: GetStaticProps<Props> = async () => {
	// const allPostsData = getSortedPostsData();
	const res = await fetch(
		'https://proud-union-5302.nan-hanaoka.workers.dev/api/todos'
	)
	const resString = await res.text()

	return {
		props: {
			resString
		}
	}
}

export default function Home({ resString } : Props) {
	console.log(resString)

  const [count, setCount] = React.useState(0);
  return (
    <>
			<section>
				<h1>
					{/*Learn <a href="https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website">Next.js!</a>*/}
					Read<Link href={'/posts/first-post'}>second page!</Link>
				</h1>
				<p>Get started by editing <code>pages/index.js</code></p>
			</section>
		</>
  )
}
