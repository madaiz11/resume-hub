import { NextResponse } from 'next/server';
import { mockResumeData } from '../../../../src/infrastructure/mock/mock-data';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    return NextResponse.json(
      { burndownPoints: [
        { date: "2023-01-15", planned: 120, actual: 115 },
        { date: "2023-02-15", planned: 100, actual: 90 },
        { date: "2023-03-15", planned: 80, actual: 75 },
        { date: "2023-04-15", planned: 60, actual: 50 },
        { date: "2023-05-15", planned: 40, actual: 30 },
        { date: "2023-06-15", planned: 20, actual: 10 },
        { date: "2023-07-15", planned: 0, actual: 0 },
      ] },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
} 