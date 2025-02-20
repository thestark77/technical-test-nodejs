import { z } from 'zod'

//User schemas
const emailSchema = z.string().email()
const passwordSchema = z.string().min(8).max(255)

//Task schemas
const idSchema = z.number().min(1).max(100)
const titleSchema = z.string().min(1).max(255)
const descriptionSchema = z.string().min(1).max(255)
const statusSchema = z.enum(['pending', 'completed'])

export const authSchema = z.object({
  email: emailSchema,
  password: passwordSchema
})

export const createTaskSchema = z.object({
  title: titleSchema,
  description: descriptionSchema
})

export const uptateTaksSchema = z.object({
  title: titleSchema.optional(),
  description: descriptionSchema.optional(),
  status: statusSchema.optional()
})

export const deleteTaskSchema = z.object({
  id: idSchema
})

export function safeParseValidation(schema, data) {
  const validation = schema.safeParse(data)

  if (!validation.success) {
    throw new Error('❌ Error validating data:', {
      
    })
  }

  return {
    success: true,
    data: validation.data
  }
}
