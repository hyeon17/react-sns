import { rest } from "msw";

export const commentHandler = [
  rest.get("/comments", async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 12,
        content: "",
      })
    );
  }),
];
