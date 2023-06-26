import React, {useEffect} from 'react'
import Link from "next/link";
// import Link from 'next/link';
// import { GetStaticProps } from "next"; // サーバーでキャッシュを作ってそれを返す。静的ページで使われる。SSGってやつ
// import { GetServerSideProps } from "next"; // リクエストごとにサーバーからデータを取ってくる。


function  TwitchApi() {
  const [user, setUser] = React.useState(null);
  useEffect(() => {
    fetch('https://api.twitch.tv/helix/users?login=twitchdev', {
      method: 'GET',
      headers: {
        'Authorization': 'ここにaccess_tokenと',
        'Client-Id': 'client_idをいれたらたたける',
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && data.data && data.data.length > 0) {
          setUser(data.data[0]);
        }
      })
      .catch(error => console.error('Error:', error));
  }, []);

  if (!user) {
    return <div>Loading...</div>; // データがまだ読み込まれていない場合は、ローディングインジケータを表示
  }

  return (
    <>
      <h2>
        <Link href={"/posts/first-post"}>Back to home</Link>
      </h2>
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </>
  );
}

export default TwitchApi;
