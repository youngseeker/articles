import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/articles' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/articles/' : '',
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  typescript: {
    ignoreBuildErrors: true,
  },
}

const withMDX = createMDX({
  // No options needed here - we'll handle rehype/remark plugins in runtime
})

export default withMDX(nextConfig)
