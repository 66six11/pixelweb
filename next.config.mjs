/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '',
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: (function() {
            const basePath = nextConfig.basePath; // 捕获basePath
            return function Loader({ src, width, quality }) {
                // 现在你可以使用basePath了
                return `${basePath}/${src}?w=${width}&q=${quality || 'auto'}`;
            };
        })()
    },



};


export default nextConfig;
