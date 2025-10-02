'use client';

import { IconBrightness } from '@tabler/icons-react';
import { Button } from '@workspace/ui/components/button';
import { useTheme } from 'next-themes';
import { type MouseEvent, useCallback } from 'react';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const handleThemeToggle = useCallback(
    (e?: MouseEvent) => {
      const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
      const root = document.documentElement;

      if (!document.startViewTransition) {
        return setTheme(newTheme);
      }

      // set coordinates from the click event
      if (e) {
        root.style.setProperty('--x', `${e.clientX}px`);
        root.style.setProperty('--y', `${e.clientY}px`);
      }

      document.startViewTransition(() => {
        setTheme(newTheme);
      });
    },
    [resolvedTheme, setTheme]
  );

  return (
    <Button className="hover:cursor-pointer" onClick={handleThemeToggle} size="icon" variant="ghost">
      <IconBrightness />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
