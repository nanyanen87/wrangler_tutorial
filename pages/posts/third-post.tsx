import Link from 'next/link';
import useSWR from "swr";
import React, { useState, useEffect } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const CommentKV: React.FC = () => {

  const { data, error } = useSWR("/api/helloKv", fetcher);
  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main>
      <h2>
        <Link href={"/posts/first-post"}>Back to home</Link>
      </h2>
      <p className="p-8">{data[0].text}</p>
    </main>
  );
};

export default CommentKV