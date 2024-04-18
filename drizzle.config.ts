import type { Config } from 'drizzle-kit'

export default {
  schema: './app/schema.ts',
  out: './drizzle/migrations',
  driver: 'd1',
  dbCredentials: {
    wranglerConfigPath: 'wrangler.toml',
    dbName: 'd1-todo'
  }
} satisfies Config
