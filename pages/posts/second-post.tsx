import React from 'react'
import Link from 'next/link';
import { GetStaticProps } from "next"; // サーバーでキャッシュを作ってそれを返す。静的ページで使われる。SSGってやつ
import { GetServerSideProps } from "next"; // リクエストごとにサーバーからデータを取ってくる。


type Props = {
	resString: string;
};

// 外部api呼び出しお試し
export const getStaticProps: GetStaticProps<Props> = async () => {
	// const allPostsData = getSortedPostsData();
	// frontから別ドメインapiを飛ばしてるように見えるが、そこはうまいことやってCORSに引っかからないようになっている。
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
      <h2>
        <Link href={"/posts/first-post"}>Back to home</Link>
      </h2>
				<p>Get started by editing <code>pages/index.js</code></p>
			</section>
		</>
  )
}
