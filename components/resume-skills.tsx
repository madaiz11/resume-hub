'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useTranslations } from '@/hooks';
  import { SkillType } from '@/src/domain/resume/entities';
import { SkillLevelEnum } from '@/src/domain/resume/enums';

interface ResumeSkillsProps {
  skills: SkillType[];
}

const SKILL_LEVEL_MAP = {
  [SkillLevelEnum.BEGINNER]: 1,
  [SkillLevelEnum.INTERMEDIATE]: 2,
  [SkillLevelEnum.ADVANCED]: 3,
  [SkillLevelEnum.EXPERT]: 4,
};

export function ResumeSkills({ skills }: ResumeSkillsProps) {
  const { t } = useTranslations();

  // Group skills by category
  const categories = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, SkillType[]>
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t('skills.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          {Object.entries(categories).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="mb-3 font-medium">{category}</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {categorySkills.map(skill => (
                  <div key={'skill-' + skill.name} className="flex items-center gap-2">
                    <div className="w-full max-w-[180px]">
                      <p className="text-sm">{skill.name}</p>
                    </div>
                    <Progress value={SKILL_LEVEL_MAP[skill.level] * 20} className="h-2 flex-1" />
                    <Badge variant="outline" className="w-8 justify-center">
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
