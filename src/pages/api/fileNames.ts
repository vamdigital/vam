// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

type Data = {
  fileNames: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const assetsDir = 'assets/journal' // change this to assets/illustrations when we start putting illustration 
  const dir = path.resolve('./public', assetsDir)
  const fileNames = fs.readdirSync(dir)

  res.status(200).json({ fileNames })
}
