import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { AIIcon } from "./icons/ai";
import { Button } from "@/components/ui/button";
import { IconButton } from "./icon-button";
import { StarsIcon } from "./icons/stars";

export const AIGenerateDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconButton>
          <StarsIcon height={24} width={24} />
        </IconButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[50vw]">
        <DialogHeader>
          <DialogTitle className="flex gap-1">
            <AIIcon height={20} width={20} />
            Ask AI
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4"></div>
        <DialogFooter>
          <Button type="submit">Generate</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
