import 'dotenv/config';
import connectDB from './mongodb/mongodb.client';
import * as initialSchema from './migrations/001_initial_schema';
import * as resumeSeeder from './seeders/001_resume_seeder';

async function runMigrations() {
  try {
    await connectDB();
    console.log('Running migrations...');
    await initialSchema.up();
    console.log('✅ Migrations completed successfully');
  } catch (error) {
    console.error('❌ Error running migrations:', error);
  } finally {
    process.exit();
  }
}

async function rollbackMigrations() {
  try {
    await connectDB();
    console.log('Rolling back migrations...');
    await initialSchema.down();
    console.log('✅ Rollback completed successfully');
  } catch (error) {
    console.error('❌ Error rolling back migrations:', error);
  } finally {
    process.exit();
  }
}

async function runSeeders() {
  try {
    await connectDB();
    console.log('Running seeders...');
    await resumeSeeder.seed();
    console.log('✅ Seeding completed successfully');
  } catch (error) {
    console.error('❌ Error running seeders:', error);
  } finally {
    process.exit();
  }
}

async function clearData() {
  try {
    await connectDB();
    console.log('Clearing data...');
    await resumeSeeder.clear();
    console.log('✅ Data cleared successfully');
  } catch (error) {
    console.error('❌ Error clearing data:', error);
  } finally {
    process.exit();
  }
}

const command = process.argv[2];

switch (command) {
  case 'migrate':
    runMigrations();
    break;
  case 'rollback':
    rollbackMigrations();
    break;
  case 'seed':
    runSeeders();
    break;
  case 'clear':
    clearData();
    break;
  default:
    console.log('Available commands: migrate, rollback, seed, clear');
    process.exit();
} 