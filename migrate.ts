import { DataSource } from 'typeorm';
import { AppDataSource } from './src/data-source';  // Adjust the path as needed

(async () => {
  try {
    // Initialize the data source
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');

    // Run migrations
    await AppDataSource.runMigrations();
    console.log('Migrations executed successfully.');
  } catch (error) {
    console.error('Error during migration:', error);
  } finally {
    // Destroy the data source
    await AppDataSource.destroy();
    console.log('Data Source has been destroyed.');
  }
})();