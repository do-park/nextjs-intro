const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

module.exports = {
  reactStrictMode: true,
  async rewrites() {
      return [{
        source: `/api/movies`,
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      }]
  },
}
