/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this part
  devServer: {
    allowedDevOrigins: ["http://192.168.0.23:3000"],
  },
  // ... you might have other configurations here
};

export default nextConfig;