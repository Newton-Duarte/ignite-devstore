import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
})

const parsedEnvSchema = envSchema.safeParse(process.env)

if (!parsedEnvSchema.success) {
  console.error(
    'Invalid environment variables',
    parsedEnvSchema.error.flatten().fieldErrors,
  )

  throw new Error('Invalid environment variables')
}

export const env = parsedEnvSchema.data
