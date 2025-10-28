/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for catching potential issues

  images: {
    domains: ["192.168.0.104"], // LAN IP for local images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "", // leave empty if no custom port
      },
    ],
  },

  // Allow local network devices to access the dev server
  allowedDevOrigins: [
    "http://192.168.0.104:3000", // your PC's LAN IP
  ],
};

module.exports = nextConfig;
