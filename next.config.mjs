/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist", //   Optional: Change the output directory `out` -> `dist`
  images: { unoptimized: true },
};

export default nextConfig;
