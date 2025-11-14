
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Users,
  LayoutGrid,
  BrainCircuit,
  Coins,
  AreaChart,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    icon: <LayoutGrid className="h-8 w-8 text-primary" />,
    title: 'Workspaces por proyecto',
    description: 'Organiza agentes, datos y colaboradoes en espacios de trabajo dedicados por cada proyecto.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Roles (Admin/PM/Colabs)',
    description: 'Gestiona permisos y accesos con roles predefinidos para administradores, jefes de proyecto y colaboradores.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'Integración humana + IA',
    description: 'Combina la eficiencia de los agentes de IA con la supervisión y validación de equipos humanos.',
  },
  {
    icon: <Coins className="h-8 w-8 text-primary" />,
    title: 'Créditos pool compartidos',
    description: 'Unifica el consumo de créditos en un pool para todo el equipo, optimizando el uso y la gestión.',
  },
  {
    icon: <AreaChart className="h-8 w-8 text-primary" />,
    title: 'UI avanzada (métricas/ROI)',
    description: 'Visualiza el rendimiento de tus agentes con dashboards avanzados y mide el retorno de la inversión.',
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: 'Copilot 360 inteligente',
    description: 'Un asistente de IA proactivo que ofrece insights, sugerencias y automatiza tareas complejas en el dashboard.',
  },
];

export default function Dashboard360Page() {
  return (
    <main className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Dashboard 360
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          La plataforma inteligente para equipos y empresas.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start gap-4">
                {feature.icon}
                <div className="flex-1">
                  <CardTitle>{feature.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
