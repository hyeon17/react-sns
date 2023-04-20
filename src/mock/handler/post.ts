import { sleep } from "@/util/sleep";
import { rest } from "msw";

export const postHandler = [
  rest.get("/posts", (req, res, ctx) => {
    const user = req.url.searchParams.get("username");

    if (!user) return res(ctx.status(400), ctx.json({}));

    return res(ctx.status(200), ctx.json({}));
  }),
  rest.get<never, { id: string }>("/posts/:id", async (req, res, ctx) => {
    const { id } = req.params;

    req.url.searchParams;
    return res(
      ctx.status(200),
      ctx.json({
        id: 12,
      })
    );
  }),
];
