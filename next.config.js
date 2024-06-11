/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        connectionString: "mongodb://localhost/next-js-registration-login-example",
        secret: process.env.SECRET_KEY
    },
    publicRuntimeConfig: {
        apiUrl: process.env.API_URI
    }
}

module.exports = nextConfig
