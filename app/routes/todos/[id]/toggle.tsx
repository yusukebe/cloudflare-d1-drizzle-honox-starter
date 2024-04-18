import { eq } from 'drizzle-orm'
import { createRoute } from 'honox/factory'
import z from 'zod'
import { zValidator } from '@hono/zod-validator'
import { todos } from '@/schema'

export const POST = createRoute(
  zValidator(
    'param',
    z.object({
      id: z.string()
    })
  ),
  async (c) => {
    const { id: idParam } = c.req.valid('param')
    const id = Number(idParam)

    const results = await c.var.db.select().from(todos).where(eq(todos.id, id))

    const todo = results[0]

    if (!todo) {
      return c.text('Todo not found', 404)
    }

    await c.var.db.update(todos).set({ completed: !todo.completed }).where(eq(todos.id, id))
    return c.redirect('/')
  }
)
