import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Standard shadcn className combiner: clsx for conditional class joining +
// tailwind-merge to resolve conflicting Tailwind utilities.
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
