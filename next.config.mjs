/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
            hostname:process.env.HOSTNAME,
            }
        ]
    }
};

export default nextConfig;
