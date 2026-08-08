import type { NextConfig } from 'next'

// Images are served from /public and optimized by Next, so no remote hosts
// are needed. Keep it that way — the previous setup fetched its own images
// back from the production domain.
const nextConfig: NextConfig = {}

export default nextConfig
