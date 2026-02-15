module.exports = {
    async rewrites() {
        return [
            {
                source: '/favorites',
                destination: 'https://favorites-collection.vercel.app',
            },
            {
                source: '/favorites/:path*',
                destination: 'https://favorites-collection.vercel.app/:path*',
            },
        ]
    },
}
