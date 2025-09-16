export default ({ env }) => {
  console.log('DEBUG: DATABASE_CLIENT =', env('DATABASE_CLIENT'));
  console.log('DEBUG: DATABASE_URL =', env('DATABASE_URL'));

  return {
    connection: {
      client: env('DATABASE_CLIENT', 'postgres'),
      connection: env('DATABASE_URL'),
      pool: { min: 0, max: 10 },
      acquireConnectionTimeout: 60000,
    },
  };
};
