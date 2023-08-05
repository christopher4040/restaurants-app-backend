module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['PyrBLzRS2QYrsvDGETLzRw==', 'HG4zWrspdQZIA1dubB5nLw==', 'W60EhXu4qTHD9jR1VSpi7g==', 'SsMXLn4CJTo1ieGY5OejMw==']),
  },
});
