module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '07c5ab57f4becec7b3d7d94f6feff7d3'),
  },
});
