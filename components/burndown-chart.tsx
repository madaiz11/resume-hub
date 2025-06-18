"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { format, parseISO } from "date-fns";

interface BurndownChartProps {
  data: any[];
}

export function BurndownChart({ data }: BurndownChartProps) {
  const chartData = data.map(point => ({
    ...point,
    formattedDate: format(parseISO(point.date), 'MMM d')
  }));

  // Calculate completion percentage
  const initialPoints = data[0]?.planned || 0;
  const remainingPoints = data[data.length - 1]?.actual || 0;
  const completionPercentage = initialPoints > 0 
    ? Math.round(((initialPoints - remainingPoints) / initialPoints) * 100) 
    : 0;

  // Calculate if ahead or behind schedule
  const lastDataPoint = data[data.length - 1];
  const status = lastDataPoint 
    ? lastDataPoint.actual <= lastDataPoint.planned 
      ? 'ahead' 
      : 'behind'
    : 'on-track';

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Project Burndown</CardTitle>
        <CardDescription>
          Tracking progress over time - {completionPercentage}% complete
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Initial Points</CardDescription>
                <CardTitle>{initialPoints}</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Remaining Points</CardDescription>
                <CardTitle>{remainingPoints}</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Status</CardDescription>
                <CardTitle className={status === 'ahead' ? 'text-green-500' : status === 'behind' ? 'text-red-500' : ''}>
                  {status === 'ahead' ? 'Ahead of Schedule' : status === 'behind' ? 'Behind Schedule' : 'On Track'}
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="formattedDate" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [`${value} points`, '']}
                  labelFormatter={(label) => `Date: ${label}`}
                />
                <Legend />
                <Line
                  type="monotone"
                  name="Planned"
                  dataKey="planned"
                  stroke="hsl(var(--chart-1))"
                  activeDot={{ r: 8 }}
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  name="Actual"
                  dataKey="actual"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}