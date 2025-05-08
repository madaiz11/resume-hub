'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from '@/lib/hooks/useTranslations';
import { IProfileData } from '@/src/domain/entities/resume';
import { Download, Github, Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

interface ResumeProfileProps {
  profile: IProfileData;
}

export function ResumeProfile({ profile }: ResumeProfileProps) {
  const { t } = useTranslations();

  return (
    <Card className="w-full overflow-hidden">
      <div className="relative h-32 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="absolute -bottom-16 left-6">
          {profile.avatar ? (
            <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-background">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={128}
                height={128}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-background bg-muted">
              <span className="text-4xl font-bold">{profile.name.charAt(0)}</span>
            </div>
          )}
        </div>
        <div className="absolute right-6 top-6">
          <Button variant="outline" className="bg-background">
            <Download className="mr-2 h-4 w-4" />
            {t('profile.download')}
          </Button>
        </div>
      </div>
      <CardHeader className="pt-20">
        <CardTitle className="text-2xl">{profile.name}</CardTitle>
        <CardDescription className="text-lg">{profile.title}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <p className="text-muted-foreground">{profile.summary}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href={`mailto:${profile.email}`} className="text-sm hover:underline">
                {profile.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm">{profile.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">{profile.location}</span>
            </div>
            {profile.linkedin && (
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-primary" />
                <a
                  href={`https://${profile.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  {profile.linkedin}
                </a>
              </div>
            )}
            {profile.github && (
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-primary" />
                <a
                  href={`https://${profile.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  {profile.github}
                </a>
              </div>
            )}
            {profile.website && (
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <a
                  href={`https://${profile.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  {profile.website}
                </a>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
