/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export
    // basePath: "/portfolio", // Change to your GitHub repo name
    images: {
      unoptimized: true, // GitHub Pages doesn’t support Next.js image optimization
    },
};

export default nextConfig;
