import z from 'zod'

export const SignUpUdlaSchema = z.object({
  username: z.string().min(3, {
    message: 'Username must be at least 3 characters'
  }),
  password: z.string().min(4, {
    message: 'Password must be at least 4 characters'
  })
})

export const SignUpPersonSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters' }),
  secondName: z.string().optional(),
  firstSurname: z.string(),
  secondSurname: z.string().optional(),
  email: z.string().email('Email must be a valid email')
})
