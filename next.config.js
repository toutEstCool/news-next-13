/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "instagram.ffru2-1.fna.fbcdn.net",
      },
    ],
  },
};
