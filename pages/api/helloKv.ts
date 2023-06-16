import { KVNamespace } from "@cloudflare/workers-types";
import type { NextRequest } from 'next/server'
export const config = {
  runtime: 'edge',
}
// localでは接続できないがデプロイしたら、bindingされてる（設定してるので表示される）
// localで実験できる方法があるとしたら、workersを別に起動させておくか、
const fetchComment = async () => {
  const { comments } = process.env as unknown as {
    comments: KVNamespace;
  };

  const commnentData = await comments.get("nan", "text");

  return commnentData;
};
export default async function handler(req: NextRequest) {
  const data = await fetchComment()
  return new Response(JSON.stringify([{id: 2, text :data}]))
}
