/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*",
			},
		],
	},
};

module.exports = nextConfig;
