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
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
