module.exports = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'TestDB',
    entities: ['src/entities/*.entity.ts'],
    migrations: ['src/migrations/*.ts'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  };
  