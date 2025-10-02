'use client';

import { Button } from '@workspace/ui/components/button';
import { toast } from '@workspace/ui/components/sonner';

export function Toaster() {
  const handleOnClick = () => {
    toast(new Date().toISOString());
  }

  return (
    <Button onClick={handleOnClick}>
      Click me!
    </Button>
  );
}
