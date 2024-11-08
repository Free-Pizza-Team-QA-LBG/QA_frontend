/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_BACKEND_IP: process.env.NEXT_PUBLIC_BACKEND_IP,
  },
};

export default nextConfig;
