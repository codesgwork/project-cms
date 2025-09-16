export default ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'postgres'), // ✅ TS will only allow valid values
    connection: env('DATABASE_URL'),            // ✅ must exist in .env
    pool: { min: 0, max: 10 },
    acquireConnectionTimeout: 60_000,
  },
});
