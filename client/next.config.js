/** @type {import('next').NextConfig} */
// module.exports = {
//   webpackDevMiddleware: (config) => {
//     // Solve compiling problem via vagrant
//     config.watchOptions = {
//       poll: 1000,   // Check for changes every second
//       aggregateTimeout: 300,   // delay before rebuilding
//     };
//     return config;
//   }
// };

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  fallback: {
    "fs": false,
    "path": false,
    "os": false,
  }
}

module.exports = nextConfig
