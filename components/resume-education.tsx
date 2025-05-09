'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from '@/hooks';
import { IEducation } from '@/src/domain/entities/resume';
import { format, parseISO } from 'date-fns';

interface ResumeEducationProps {
  educations: IEducation[];
}

export function ResumeEducation({ educations }: ResumeEducationProps) {
  const { t } = useTranslations();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t('education.title')}</CardTitle>
        <CardDescription>{t('education.description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          {educations.map(education => (
            <div
              key={education.id}
              className="relative border-l-2 border-muted pl-6 pb-6 last:pb-0"
            >
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-muted bg-background"></div>
              <div className="grid gap-2">
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h3 className="font-semibold">{education.degree}</h3>
                    <p className="text-sm text-muted-foreground">
                      {education.institution} • {education.location}
                    </p>
                  </div>
                  <time className="text-sm text-muted-foreground whitespace-nowrap">
                    {format(parseISO(education.startDate), 'MMM yyyy')} -{' '}
                    {format(parseISO(education.endDate), 'MMM yyyy')}
                  </time>
                </div>
                <p className="text-sm text-muted-foreground">{education.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
