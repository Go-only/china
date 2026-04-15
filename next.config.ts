import type { NextConfig } from 'next'

const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages'
const repo = 'china'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isGhPages && {
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
  }),
}

export default nextConfig
