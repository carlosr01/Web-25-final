/** @type {import('postcss-load-config').Config} */
const isProd = process.env.NODE_ENV === 'production'

const config = {
  plugins: {
    tailwindcss: {},
    // minify CSS in production builds
    ...(isProd ? { 'cssnano': { preset: 'default' } } : {}),
  },
};

export default config;
