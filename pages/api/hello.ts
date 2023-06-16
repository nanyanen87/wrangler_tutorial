
// Next.js Edge API Routes: https://nextjs.org/docs/api-routes/edge-api-routes

import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  return new Response(JSON.stringify( [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Doe', age: 28 },
    { name: 'Alice Smith', age: 35 },
    { name: 'Bob Johnson', age: 40 },
    { name: 'Charlie Brown', age: 50 },
    { name: 'David Williams', age: 45 },
    { name: 'Eva Davis', age: 38 },
    { name: 'Frank Miller', age: 42 },
    { name: 'Grace Wilson', age: 32 },
    { name: 'Helen Moore', age: 37 },
  ]))
}


