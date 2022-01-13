import { Application, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(async (ctx) => {
  console.log('path=', ctx.request.url.pathname)
  await send(ctx, ctx.request.url.pathname, {
    // root: `${Deno.cwd()}/public/`,
    root: Deno.cwd(),
    index: "main.html",
  });
});

console.log('start at : http://127.0.0.1:8014')
console.log('cwd=', Deno.cwd())
await app.listen({ port: 8014 });