'use client';

import { ResumeEducation } from '@/components/resume-education';
import { ResumeExperience } from '@/components/resume-experience';
import { ResumeProfile } from '@/components/resume-profile';
import { ResumeProjects } from '@/components/resume-projects';
import { ResumeSkills } from '@/components/resume-skills';
import { Skeleton } from '@/components/ui/skeleton';
import { useResumeData } from '@/lib/hooks';

export function ResumeClient() {
  const { resumeData, isLoading } = useResumeData();

  if (isLoading || !resumeData) {
    return (
      <div className="space-y-8">
        <Skeleton className="h-[300px] w-full" />
        <Skeleton className="h-[500px] w-full" />
        <Skeleton className="h-[300px] w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <ResumeProfile profile={resumeData.profile} />

      <div className="grid gap-8 md:grid-cols-2">
        <ResumeExperience experiences={resumeData.experiences} />
        <div className="space-y-8">
          <ResumeEducation educations={resumeData.educations} />
          <ResumeSkills skills={resumeData.skills} />
        </div>
      </div>

      <ResumeProjects projects={resumeData.projects} />
    </div>
  );
}
