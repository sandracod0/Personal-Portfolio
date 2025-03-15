
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full transition-all duration-300 relative group",
        theme === 'dark' ? 'bg-secondary text-secondary-foreground' : 'bg-secondary text-secondary-foreground',
        className
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <div className="relative flex items-center justify-center w-5 h-5 overflow-hidden">
        <Sun 
          className={cn(
            "absolute w-4 h-4 transition-all duration-300 ease-spring",
            theme === 'dark' ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
          )} 
        />
        <Moon 
          className={cn(
            "absolute w-4 h-4 transition-all duration-300 ease-spring",
            theme === 'light' ? "opacity-0 -rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
          )} 
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
