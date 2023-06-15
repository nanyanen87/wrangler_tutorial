import type { FC } from 'react';
import Link from 'next/link';
import useSWR from "swr";

type Data = {
  name: string
  age: string
}[];

// let Data = [
//   {
//     "content" : 'test',
//     "id" : "1"
//   }
// ]

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const FirstPost: FC = () => {
  const { data, error } = useSWR<Data>("/api/hello", fetcher);
  // const data = Data;
  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <h1>First page</h1>
      <h2>
        <Link href={"/"}>Back to home</Link>
      </h2>
      <table>
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              CONTENT
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data.name}>
              <td>{data.name}</td>
              <td>{data.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
};
export default FirstPost;
