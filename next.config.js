/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/photo**',
          },
        ],
      },
}

module.exports = nextConfig


// https://images.unsplash.com/photo-1611488006018-95b79a137ff5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGxvZ298ZW58MHx8MHx8fDA%3D