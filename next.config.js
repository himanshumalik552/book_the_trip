/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        connectionString: process.env.SECRET_KEY,
        secret: process.env.MONGODB_URI
    },
    publicRuntimeConfig: {
        apiUrl: process.env.API_URI
    }
}

module.exports = nextConfig
