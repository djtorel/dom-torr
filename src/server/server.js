const Koa = require("koa");
const Router = require("koa-router");
const logger = require("koa-logger");
const setupSSR = require("koa-nextjs");

async function main() {
  const app = new Koa();

  const dir = "./src/app";
  const options = { dir };
  await setupSSR(app, { options });

  app.use(logger());

  const router = new Router();

  router.get("/", async ctx => {
    await ctx.render({
      page: "index"
    });
  });

  app.use(router.routes());

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
