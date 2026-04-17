import type { NextConfig } from 'next'

const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages'
const repo = 'china'
const basePath = isGhPages ? `/${repo}` : ''

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isGhPages && {
    basePath,
    assetPrefix: `${basePath}/`,
  }),
}

export default nextConfig
