'use client';

import { ThemeToggle } from '@/components/theme-toggler';
import { Toaster } from '@/components/toaster';

export default function Homepage() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>

        <div className="flex gap-2">
          <Toaster />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
