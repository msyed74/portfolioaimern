
    import React from 'react';
    import { cn } from '@/lib/utils.js';

    const Textarea = React.forwardRef(({ className, ...props }, ref) => {
      return (
        <textarea
          className={cn(
            'flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            'transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_2px_hsl(var(--primary)_/_0.5)]',
            className
          )}
          ref={ref}
          {...props}
        />
      );
    });
    Textarea.displayName = 'Textarea';

    export { Textarea };
  