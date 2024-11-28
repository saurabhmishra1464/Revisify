
import { z } from 'zod';

export const AuthFormSchema = z.object({
  fullname: z.string().min(1, 'Full Name is required').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});
