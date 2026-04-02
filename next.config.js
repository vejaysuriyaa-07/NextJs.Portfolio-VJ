/** @type {import('next').NextConfig} */
const repo = "NextJs.Portfolio-VJ";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? `/${repo}` : "",
  },
  basePath: isGitHubPages ? `/${repo}` : "",
  assetPrefix: isGitHubPages ? `/${repo}/` : "",
};

module.exports = nextConfig;
