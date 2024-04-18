import { type DrizzleD1Database } from 'drizzle-orm/d1'
import {} from 'hono'

type Head = {
  title?: string
}

declare module 'hono' {
  interface Env {
    Bindings: {
      DB: D1Database
    }
    Variables: {
      db: DrizzleD1Database
    }
  }
  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head): Response | Promise<Response>
  }
}
