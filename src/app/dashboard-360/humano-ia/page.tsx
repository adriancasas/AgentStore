'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';

const teams = [
  {
    id: 'team-seo',
    human: {
      role: 'SEO Strategist',
      name: 'Laura Gómez',
      avatar: PlaceHolderImages.find((img) => img.id === 'user1')?.imageUrl,
    },
    agent: {
      role: 'SEO Positioner Agent',
      name: 'Agent SEO-5',
      avatar: PlaceHolderImages.find((img) => img.id === 'agent6')?.imageUrl,
    },
    assignedTask: 'Análisis de palabras clave de la competencia.',
  },
  {
    id: 'team-content',
    human: {
      role: 'Content Manager',
      name: 'Carlos Rivas',
      avatar: PlaceHolderImages.find((img) => img.id === 'user2')?.imageUrl,
    },
    agent: {
      role: 'Article Writer Agent',
      name: 'Writer-Bot 2.1',
      avatar: PlaceHolderImages.find((img) => img.id === 'agent3')?.imageUrl,
    },
    assignedTask: 'Redacción de borrador para el blog post de "Novedades Q3".',
  },
  {
    id: 'team-dev',
    human: {
      role: 'Lead Developer',
      name: 'Sofía Chen',
      avatar: PlaceHolderImages.find((img) => img.id === 'user5')?.imageUrl,
    },
    agent: {
      role: 'Code Review Agent',
      name: 'CodeGen Pro',
      avatar: PlaceHolderImages.find((img) => img.id === 'agent4')?.imageUrl,
    },
    assignedTask: 'Revisión de pull request #241.',
  },
];

const projectTasks = [
  { id: 'task-1', description: 'Investigación inicial de mercado', completed: true },
  { id: 'task-2', description: 'Definición de KPIs del proyecto', completed: true },
  { id: 'task-3', description: 'Análisis de palabras clave de la competencia', completed: false },
  { id: 'task-4', description: 'Creación de mockups de la nueva interfaz', completed: true },
  { id: 'task-5', description: 'Desarrollo del componente de autenticación', completed: false },
  { id: 'task-6', description: 'Redacción de borrador para el blog post de "Novedades Q3"', completed: false },
  { id: 'task-7', description: 'Preparar presentación para stakeholders', completed: false },
];

export default function HumanoIaPage() {
  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Humano + IA Teams</h1>
        <p className="text-muted-foreground">
          Visión de los equipos y tareas asignadas para el Proyecto X.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <Card key={team.id}>
            <CardHeader>
                <div className="flex items-center gap-4">
                     <div className="relative">
                        <Avatar className="h-16 w-16 border-2 border-primary">
                            <AvatarImage src={team.human.avatar} />
                            <AvatarFallback>{team.human.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <Badge variant="secondary" className="absolute -bottom-1 -right-2 text-xs">Humano</Badge>
                     </div>
                     <div className="relative">
                         <Avatar className="h-16 w-16 border-2 border-accent">
                            <AvatarImage src={team.agent.avatar} />
                            <AvatarFallback>{team.agent.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <Badge variant="default" className="bg-accent text-accent-foreground absolute -bottom-1 -right-2 text-xs">IA</Badge>
                     </div>
                </div>
            </CardHeader>
            <CardContent>
                <h3 className="font-semibold">{team.human.role} + {team.agent.role}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                    <span className='font-medium'>{team.human.name}</span> está trabajando con <span className='font-medium'>{team.agent.name}</span>.
                </p>
                <Separator className="my-4" />
                <p className="text-sm font-semibold">Tarea actual:</p>
                <p className="text-sm text-muted-foreground">{team.assignedTask}</p>
            </CardContent>
          </Card>
        ))}
      </div>

       <Card className="mt-8">
        <CardHeader>
            <CardTitle>Checklist del Proyecto X</CardTitle>
            <CardDescription>Estado de todas las tareas planificadas.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
                {projectTasks.map(task => (
                    <div key={task.id} className="flex items-center gap-4 rounded-md border p-4">
                        {task.completed ? (
                            <CheckCircle className="h-6 w-6 text-green-500" />
                        ) : (
                            <Circle className="h-6 w-6 text-muted-foreground" />
                        )}
                        <span className={`flex-1 ${task.completed ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
                            {task.description}
                        </span>
                    </div>
                ))}
            </div>
        </CardContent>
      </Card>
    </main>
  );
}
