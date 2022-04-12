module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0f969e6197c889e66b5cbc1818a6c8ce'),
  },
});
