/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
};

const withPWA = require("@imbios/next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  // next.js config
});

module.exports = nextConfig;
