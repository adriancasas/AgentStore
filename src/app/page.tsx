import DashboardLayout from '@/components/dashboard/layout';
import { ProjectOverview } from '@/components/dashboard/project-overview';
import { projects } from '@/lib/data';

export default function Home() {
  const defaultProject = projects[0];

  return (
    <DashboardLayout project={defaultProject}>
      {defaultProject ? (
        <ProjectOverview project={defaultProject} />
      ) : (
        <div className="flex h-full items-center justify-center">
          <p className="text-muted-foreground">Select a project to get started.</p>
        </div>
      )}
    </DashboardLayout>
  );
}
