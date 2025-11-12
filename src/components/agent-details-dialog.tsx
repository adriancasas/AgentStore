
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Agent } from '@/lib/types';
import { Separator } from './ui/separator';
import { useRouter } from 'next/navigation';

interface AgentDetailsDialogProps {
  agent: Agent;
  isOpen: boolean;
  onClose: () => void;
}

const getImage = (avatarId: string) => {
  return PlaceHolderImages.find((img) => img.id === avatarId);
};

export default function AgentDetailsDialog({
  agent,
  isOpen,
  onClose,
}: AgentDetailsDialogProps) {
  const router = useRouter();
  const avatar = getImage(agent.avatarId);

  const handleSelect = () => {
    router.push('/dashboard');
    onClose();
  };

  const descriptionPoints = agent.longDescription.split(';').filter(p => p.trim() !== '');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[480px] bg-muted">
        <DialogHeader className="items-center text-center">
          <Avatar className="w-28 h-28 mb-4">
            <AvatarImage
              src={avatar?.imageUrl}
              alt={avatar?.description}
              data-ai-hint={avatar?.imageHint}
              className="aspect-square object-cover"
            />
            <AvatarFallback>{agent.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <DialogTitle className="text-2xl">{agent.name}</DialogTitle>
          <DialogDescription>{agent.specialty}</DialogDescription>
        </DialogHeader>

        <div className="py-4 px-1 text-sm text-muted-foreground text-left">
           <ul className="space-y-2 list-disc list-inside">
              {descriptionPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
        </div>
        
        <Separator className="my-4" />

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={handleSelect}>Seleccionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
