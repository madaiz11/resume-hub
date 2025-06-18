'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from '@/hooks';
import { ProjectType } from '@/src/domain/resume/entities';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface ResumeProjectsProps {
  projects: ProjectType[];
}

export function ResumeProjects({ projects }: ResumeProjectsProps) {
  const { t } = useTranslations();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t('projects.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <Card key={'project-' + project.title} className="overflow-hidden">
              {project.image && (
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              )}
              <CardHeader className="p-4">
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech: string, index: number) => (
                    <Badge variant="outline" key={index}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    {t('projects.view')} <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
