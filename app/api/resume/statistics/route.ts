import { NextResponse } from 'next/server';
import { mockResumeData } from '../../../../src/infrastructure/mock/mock-data';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    return NextResponse.json(
      { burndownPoints: mockResumeData.burndownPoints },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
} 