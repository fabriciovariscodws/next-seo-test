module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

export default nextConfig;