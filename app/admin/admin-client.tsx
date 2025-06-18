'use client';

import { AuthGuard } from '@/components/admin/auth-guard';
import { BurndownForm } from '@/components/admin/burndown-form';
import { ProfileForm } from '@/components/admin/profile-form';
import { BurndownChart } from '@/components/burndown-chart';
import { ResumeProfile } from '@/components/resume-profile';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useResumeData } from '@/hooks';
import { useState } from 'react';

export function AdminDashboardClient() {
  const { resumeData, isLoading, updateResumeData } = useResumeData();
  const [activeTab, setActiveTab] = useState('profile');

  if (isLoading || !resumeData) {
    return (
      <AuthGuard>
        <div className="space-y-8">
          <Skeleton className="h-[300px] w-full" />
          <Skeleton className="h-[500px] w-full" />
        </div>
      </AuthGuard>
    );
  }

  const handleProfileUpdate = (updatedProfile: typeof resumeData.profile) => {
    const newData = {
      ...resumeData,
      profile: updatedProfile,
    };
    updateResumeData(newData);
  };

  const handleBurndownUpdate = (updatedPoints: any[]) => {
    const newData = {
      ...resumeData,
      burndownPoints: updatedPoints,
    };
    updateResumeData(newData);
  };

  return (
    <AuthGuard>
      <div className="space-y-8 animate-in fade-in duration-500">
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="burndown">Burndown Data</TabsTrigger>
            <TabsTrigger value="experience" disabled>
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" disabled>
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" disabled>
              Skills
            </TabsTrigger>
            <TabsTrigger value="projects" disabled>
              Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Edit Profile</CardTitle>
                    <CardDescription>Update your personal and contact information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ProfileForm profile={resumeData.profile} onSave={handleProfileUpdate} />
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Preview</CardTitle>
                    <CardDescription>See how your profile will appear to visitors</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResumeProfile profile={resumeData.profile} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="burndown" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <BurndownForm points={[]} onSave={handleBurndownUpdate} />
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Preview</CardTitle>
                    <CardDescription>See how your burndown chart will appear</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BurndownChart data={[]} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {['experience', 'education', 'skills', 'projects'].map(tab => (
            <TabsContent key={tab} value={tab}>
              <Card>
                <CardHeader>
                  <CardTitle>Coming Soon</CardTitle>
                  <CardDescription>
                    This feature is not yet implemented in the POC version.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The {tab} editing functionality will be available in a future update.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </AuthGuard>
  );
}
