'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Trash } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const burndownPointSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'Date must be in the format YYYY-MM-DD',
  }),
  planned: z.coerce.number().min(0, {
    message: 'Planned points must be a positive number',
  }),
  actual: z.coerce.number().min(0, {
    message: 'Actual points must be a positive number',
  }),
});

type BurndownPointFormValues = z.infer<typeof burndownPointSchema>;

interface BurndownFormProps {
  points: any[];
  onSave: (points: any[]) => void;
}

export function BurndownForm({ points, onSave }: BurndownFormProps) {
  const [burndownPoints, setBurndownPoints] = useState<any[]>(points);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<BurndownPointFormValues>({
    resolver: zodResolver(burndownPointSchema),
    defaultValues: {
      date: '',
      planned: 0,
      actual: 0,
    },
  });

  function addPoint(data: BurndownPointFormValues) {
    const updatedPoints = [...burndownPoints, data].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    setBurndownPoints(updatedPoints);
    form.reset();
  }

  function removePoint(index: number) {
    const updatedPoints = burndownPoints.filter((_, i) => i !== index);
    setBurndownPoints(updatedPoints);
  }

  function saveAllChanges() {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      onSave(burndownPoints);
      setIsSubmitting(false);
      toast({
        title: 'Burndown data updated',
        description: 'Your burndown chart data has been updated successfully.',
      });
    }, 1000);
  }

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(addPoint)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Add New Data Point</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-3">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="planned"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Planned Points</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="actual"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Actual Points</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="mt-6">
                Add Data Point
              </Button>
            </CardContent>
          </Card>
        </form>
      </Form>

      <Card>
        <CardHeader>
          <CardTitle>Current Burndown Data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50 font-medium">
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Planned Points</th>
                  <th className="px-4 py-3 text-left">Actual Points</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {burndownPoints.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-4 py-3 text-center text-muted-foreground">
                      No data points yet
                    </td>
                  </tr>
                ) : (
                  burndownPoints.map((point, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-3">{point.date}</td>
                      <td className="px-4 py-3">{point.planned}</td>
                      <td className="px-4 py-3">{point.actual}</td>
                      <td className="px-4 py-3 text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-destructive"
                          onClick={() => removePoint(index)}
                        >
                          <Trash className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <Button onClick={saveAllChanges} className="mt-6" disabled={isSubmitting}>
            {isSubmitting && (
              <svg
                className="mr-2 h-4 w-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            Save All Changes
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
