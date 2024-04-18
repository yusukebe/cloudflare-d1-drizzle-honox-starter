# cloudflare-d1-drizzle-honox-starter

A starter project showing how you can integrate [Drizzle ORM](https://orm.drizzle.team) and [Cloudflare D1](https://developers.cloudflare.com/d1) with a [HonoX](https://github.com/honojs/honox) application to build awesome full-stack apps.

> [!TIP]
> If the above paragraph was a bunch of buzzwords that seem confusing, here's the simple version:
>
> - HonoX is a _full-stack framework_ combining _backend API endpoints_ with the ability to render _frontend applications with React_
> - Cloudflare D1 is a _SQL database_
> - Drizzle ORM provides an _ORM wrapper_ around D1, to allow data models and querying using a straightforward syntax

## Installation

### 0. Clone the template and install all dependencies

```sh
git clone git@github.com:yusukebe/cloudflare-d1-drizzle-honox-starter.git starter
cd starter
npm install
```

### 1. Create a new D1 database using Wrangler

```sh
npx wrangler@latest d1 create d1-todo
```

_Note that if you haven't yet used Wrangler, you will be prompted to login to Cloudflare._

Copy the output of this command, which is structured TOML configuration, into your `wrangler.toml`.

### 2. Create a new migration file

```sh
npm run migration:generate
```

### 3. Apply the migration to your local database

```sh
npm run migration:apply:local
```

### 4. When you're ready, deploy your application

```sh
npm run deploy
```

### 5. Once you've deployed your application, you can apply the migrations to your remote (production) D1 database

```sh
npm run migration:apply:remote
```

## Prisma Version

You can see the starter using [Prisma](https://www.prisma.io) instead of Drizzle ORM:

- https://github.com/kristianfreeman/cloudflare-d1-prisma-honox-starter

## Author

Yusuke Wada <https://github.com/yusukebe>

## License

MIT
