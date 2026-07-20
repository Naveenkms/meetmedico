import { clsx, type ClassValue } from "clsx"
import { Variants } from "motion/react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const motionVariantForSvg: Variants = {
  "animate-icon": {
    scale: 1.1,
  },
}
