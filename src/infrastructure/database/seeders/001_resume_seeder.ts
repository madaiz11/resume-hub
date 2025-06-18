import { ResumeModel } from '../../../domain/resume/entities/resume.entity';
import { mockResumeData } from '../../mock/mock-data';

export async function seed() {
  try {
    console.log('Starting seeding process...');
    
    // Clear existing data
    console.log('Clearing existing data...');
    const deleteResult = await ResumeModel.deleteMany({});
    console.log('Delete result:', deleteResult);
    
    // Insert mock data
    console.log('Inserting mock data...');
    const result = await ResumeModel.create(mockResumeData);
    console.log('Inserted document:', JSON.stringify(result, null, 2));
    
    // Verify data
    console.log('Verifying inserted data...');
    const count = await ResumeModel.countDocuments();
    console.log(`Found ${count} documents in the collection`);
    
    console.log('✅ Database seeded successfully');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
}

export async function clear() {
  try {
    console.log('Starting clear process...');
    const result = await ResumeModel.deleteMany({});
    console.log('Clear result:', result);
    console.log('✅ Database cleared successfully');
  } catch (error) {
    console.error('❌ Error clearing database:', error);
    throw error;
  }
} 