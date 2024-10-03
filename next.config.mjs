const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? "/hero-section-simple" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
