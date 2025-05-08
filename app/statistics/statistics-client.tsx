"use client";

import { useResumeData } from "@/lib/hooks";
import { BurndownChart } from "@/components/burndown-chart";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function StatisticsClient() {
  const { resumeData, isLoading } = useResumeData();

  if (isLoading || !resumeData) {
    return <Skeleton className="h-[500px] w-full" />;
  }

  // Calculate efficiency metrics
  const initialPoints = resumeData.burndownPoints[0]?.planned || 0;
  const remainingPoints = resumeData.burndownPoints[resumeData.burndownPoints.length - 1]?.actual || 0;
  const completedPoints = initialPoints - remainingPoints;
  const completionPercentage = initialPoints > 0 
    ? Math.round((completedPoints / initialPoints) * 100) 
    : 0;

  // Calculate if ahead or behind schedule
  const lastDataPoint = resumeData.burndownPoints[resumeData.burndownPoints.length - 1];
  const status = lastDataPoint 
    ? lastDataPoint.actual <= lastDataPoint.planned 
      ? 'ahead' 
      : 'behind'
    : 'on-track';

  const efficiency = status === 'ahead' 
    ? Math.min(100, Math.round((lastDataPoint.planned / Math.max(lastDataPoint.actual, 1)) * 100))
    : Math.round((lastDataPoint.planned / Math.max(lastDataPoint.actual, 1)) * 100);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Initial Points</CardDescription>
            <CardTitle>{initialPoints}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Completed Points</CardDescription>
            <CardTitle>{completedPoints}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Completion</CardDescription>
            <CardTitle>{completionPercentage}%</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Efficiency</CardDescription>
            <CardTitle className={
              efficiency >= 100 ? 'text-green-500' : 
              efficiency >= 80 ? 'text-amber-500' : 
              'text-red-500'
            }>
              {efficiency}%
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
      
      <BurndownChart data={resumeData.burndownPoints} />
      
      <Card>
        <CardHeader>
          <CardTitle>Burndown Analysis</CardTitle>
          <CardDescription>
            Detailed explanation of the burndown chart and statistics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>
              The burndown chart shows the progress of work over time. It compares the planned work (ideal progress) 
              with the actual work completed.
            </p>
            <h3 className="text-lg font-semibold">Current Status</h3>
            <p>
              The project is currently <span className={status === 'ahead' ? 'text-green-500 font-semibold' : status === 'behind' ? 'text-red-500 font-semibold' : ''}>
                {status === 'ahead' ? 'ahead of schedule' : status === 'behind' ? 'behind schedule' : 'on track'}
              </span>. 
              {status === 'ahead' 
                ? ' This indicates efficient work and potential for early completion.'
                : status === 'behind'
                ? ' This suggests that additional resources or adjusted scope may be needed to meet targets.'
                : ' The project is progressing as expected.'}
            </p>
            <h3 className="text-lg font-semibold">Efficiency</h3>
            <p>
              With an efficiency rate of <span className={
                efficiency >= 100 ? 'text-green-500 font-semibold' : 
                efficiency >= 80 ? 'text-amber-500 font-semibold' : 
                'text-red-500 font-semibold'
              }>{efficiency}%</span>, 
              this project is {
                efficiency >= 100 ? 'exceeding expectations.' : 
                efficiency >= 80 ? 'performing adequately but has room for improvement.' : 
                'facing challenges that need to be addressed.'
              }
            </p>
            <h3 className="text-lg font-semibold">Recommendations</h3>
            <p>
              {efficiency >= 100 
                ? 'Maintain current momentum and consider if resources can be allocated to other projects.'
                : efficiency >= 80 
                ? 'Review processes to identify potential improvements to increase efficiency.'
                : 'Conduct a team review to identify and address the issues affecting progress.'}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}