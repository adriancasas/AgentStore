import { agents, type Project } from '@/lib/data';
import { AgentCard } from './agent-card';
import { Separator } from '@/components/ui/separator';

export function ProjectOverview({ project }: { project: Project }) {
  const assignedAgents = project.agentIds.map(id => agents.find(a => a.id === id)).filter((a): a is NonNullable<typeof a> => a !== undefined && a.status !== 'available');
  const availableAgents = agents.filter(a => a.status === 'available');

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Agents Enrolled in this Project.</h2>
        <p className="text-muted-foreground">An overview of agents assigned to "{project.name}"</p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {assignedAgents.map(agent => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h2 className="text-2xl font-bold tracking-tight">Agent Bench</h2>
        <p className="text-muted-foreground">Available agents ready to be assigned to a project.</p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {availableAgents.map(agent => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </div>
  );
}
