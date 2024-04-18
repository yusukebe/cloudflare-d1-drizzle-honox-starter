import { eq } from 'drizzle-orm'
import { createRoute } from 'honox/factory'
import { todos } from '@/schema'

export const POST = createRoute(async (c) => {
  await c.var.db.delete(todos).where(eq(todos.completed, true))
  return c.redirect('/')
})
