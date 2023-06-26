// twitchAPIそのまま叩ける。
import {NextResponse, NextRequest} from "next/server";
import fetch from 'node-fetch'

export const config = {
  runtime: 'edge',
}

const fetchTwitchUser = async () => {
  const url = 'https://api.twitch.tv/helix/users?login=twitchdev';
  const clientId = process.env.CLIENT_ID!; // 環境変数からClient IDを取得
  const accessToken = process.env.ACCESS_TOKEN!; // 環境変数からAccess Tokenを取得

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Client-Id': clientId
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

// 単体で成功！
export default async function handler(req: NextRequest) {
  const data = await fetchTwitchUser();
  return new Response(JSON.stringify(data))

}
