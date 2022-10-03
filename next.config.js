/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["actar.com", "static.tvmaze.com"],
  },
}

module.exports = nextConfig
