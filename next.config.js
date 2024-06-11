/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        connectionString: "mongodb://localhost/next-js-registration-login-example",
        secret: process.env.SECRET_KEY
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'https://bookthetrip.netlify.app/api' // development api
            : 'http://localhost:3000/api' // local api
    }
}

module.exports = nextConfig
