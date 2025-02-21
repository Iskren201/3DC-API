import { DataSource } from 'typeorm';
import { config } from 'dotenv';


config();

console.log('Database connection details:', {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
});

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'TestDB',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: process.env.DB_SYNC === 'true',
    migrations: ['src/migrations/*.ts'],
  });