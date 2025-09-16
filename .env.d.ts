declare namespace NodeJS {
  interface ProcessEnv {
    // Server
    HOST: string;
    PORT: string;

    // Secrets
    APP_KEYS: string;
    API_TOKEN_SALT: string;
    ADMIN_JWT_SECRET: string;
    TRANSFER_TOKEN_SALT: string;
    ENCRYPTION_KEY: string;
    JWT_SECRET: string;

    // Database
    DATABASE_CLIENT: 'postgres' | 'sqlite' | 'mysql' | 'mariadb';
    DATABASE_URL: string;
  }
}
