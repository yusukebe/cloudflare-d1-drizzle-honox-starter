import { drizzle } from 'drizzle-orm/d1'
import { createRoute } from 'honox/factory'

export default createRoute(async (c, next) => {
  c.set('db', drizzle(c.env.DB))
  await next()
})
