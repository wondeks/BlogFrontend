/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["192.168.0.104"], // your LAN IP
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },

  // Allow all requests coming to this LAN IP in dev mode
  allowedDevOrigins: [
    "http://192.168.0.104:3000", // your PC's LAN IP
  ],
};

module.exports = nextConfig;
