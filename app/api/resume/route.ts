import { NextResponse } from 'next/server';
import { mockResumeData } from '../../../src/infrastructure/mock/mock-data';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Destructure to exclude burndownPoints
    const { burndownPoints, ...resumeData } = mockResumeData;
    
    return NextResponse.json(resumeData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch resume data' },
      { status: 500 }
    );
  }
} 