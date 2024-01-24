/** @type {import('next').NextConfig} */
const nextConfig = {
    api: {
        bodyParser: {
            sizeLimit: '4mb',
        },
    },
}

module.exports = nextConfig
