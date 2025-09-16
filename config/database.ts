export default ({ env }) => {
  const ssl = env.bool('DATABASE_SSL', false);

  return {
    connection: {
      client: env('DATABASE_CLIENT', 'postgres'),
      connection: {
        connectionString: env('DATABASE_URL'),
        ssl: ssl ? { rejectUnauthorized: false } : false,
      },
      pool: { min: 0, max: 10 },
      acquireConnectionTimeout: 60000,
    },
  };
};
