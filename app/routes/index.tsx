import { createInsertSchema } from 'drizzle-zod'
import { createRoute } from 'honox/factory'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { todos } from '@/schema'

export default createRoute(async (c) => {
  const results = await c.var.db.select().from(todos).all()

  return c.render(
    <>
      <div class="bg-white md:shadow p-4">
        <div class="flex items-center mb-4">
          <h1 class="flex-1 font-bold text-xl">
            Tracking {results.length} {results.length == 1 ? 'task' : 'tasks'}
          </h1>
          <form method="POST" action={`/todos/clear_completed`}>
            <button class="text-blue-600 hover:underline" type="submit">
              Clear completed tasks
            </button>
          </form>
        </div>

        {results.length == 0 ? <p class="text-gray-600">No tasks yet. Create one below.</p> : null}

        <ul>
          {results.map((todo) => (
            <li>
              <form method="POST" action={`/todos/${todo.id}/toggle`}>
                <input
                  type="checkbox"
                  name="completed"
                  checked={todo.completed ?? false}
                  // @ts-ignore
                  onChange="this.form.submit()"
                />{' '}
                {todo.description}
              </form>
            </li>
          ))}
        </ul>
      </div>

      <div class="rounded bg-white shadow">
        <form class="flex-1 flex space-y-4" method="post">
          <input
            type="text"
            name="description"
            class="p-4 w-full"
            placeholder="📝 Write a new task. Press enter/return to submit"
            autofocus
            autocomplete="off"
          />
        </form>
      </div>
    </>
  )
})

const insertSchema = createInsertSchema(todos, {
  id: z.undefined()
})

export const POST = createRoute(zValidator('form', insertSchema), async (c) => {
  const { description } = c.req.valid('form')
  await c.var.db.insert(todos).values({ description })
  return c.redirect('/')
})
