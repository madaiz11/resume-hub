'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from '@/hooks';
import { ExperienceType, SkillType } from '@/src/domain/resume/entities';
import { format, parseISO } from 'date-fns';

interface ResumeExperienceProps {
  experiences: ExperienceType[];
}

export function ResumeExperience({ experiences }: ResumeExperienceProps) {
  const { t } = useTranslations();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t('experience.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          {experiences.map(experience => (
            <div key={'experience-' + experience.startDate} className="relative border-l-2 border-muted pl-6 pb-6">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-muted bg-background"></div>
              <div className="grid gap-2">
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h3 className="font-semibold">{experience.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {experience.company} • {experience.location}
                    </p>
                  </div>
                  <time className="text-sm text-muted-foreground whitespace-nowrap">
                    {format(parseISO(experience.startDate), 'MMM yyyy')} -{' '}
                    {experience.endDate
                      ? format(parseISO(experience.endDate), 'MMM yyyy')
                      : 'Present'}
                  </time>
                </div>
                <ul className="ml-4 list-disc text-muted-foreground">
                  {experience.description.map((desc: string, index: number) => (
                    <li key={index} className="mt-1 text-sm">
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  {experience.skills.map((skill: SkillType, index: number) => (
                    <Badge variant="secondary" key={index}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
