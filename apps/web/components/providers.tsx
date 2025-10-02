'use client';

import { Toaster } from '@workspace/ui/components/sonner';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange={true}
      enableColorScheme={true}
    >
      {children}

      <Toaster
        closeButton={true}
        expand={false}
        position="bottom-right"
        richColors={true}
        toastOptions={{
          duration: 3 * 1000 // 3 seconds
        }}
        visibleToasts={3}
      />
    </NextThemesProvider>
  );
}
