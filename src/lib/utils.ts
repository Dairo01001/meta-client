import { User } from '@/models'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function initialsUsername(username: string) {
  return username
    .split('.')
    .map(name => name[0])
    .join('')
    .toUpperCase()
}

export const isAdmin = (user: User) => {
  return user.role === 'ADMIN'
}
