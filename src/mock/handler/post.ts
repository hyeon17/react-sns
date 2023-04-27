import { sleep } from "@/util/sleep";
import { rest } from "msw";

export const postHandler = [
  rest.get("/posts", (req, res, ctx) => {
    const user = req.url.searchParams.get("username");

    if (!user) return res(ctx.status(400), ctx.json({}));

    return res(ctx.status(200), ctx.json({
      user: {
        id: 1,
        email: "test1@gmail.com",
        username: "testUser1",
        profile: "https://picsum.photos/200/300",
      },
      posts: [
        {
          id: 1,
          files: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
          likes: 10,
          comments: 20,
          createdAt: "2023-04-20T09:03:09.566Z",
          updatedAt: "2023-04-20T09:03:09.566Z"
        },
        {
          id: 2,
          files: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
          likes: 12,
          comments: 22,
          createdAt: "2023-04-20T09:03:09.566Z",
          updatedAt: "2023-04-20T09:03:09.566Z"
        },
        {
          id: 3,
          files: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
          likes: 13,
          comments: 23,
          createdAt: "2023-04-20T09:03:09.566Z",
          updatedAt: "2023-04-20T09:03:09.566Z"
        },
        {
          id: 4,
          files: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
          likes: 14,
          comments: 24,
          createdAt: "2023-04-20T09:03:09.566Z",
          updatedAt: "2023-04-20T09:03:09.566Z"
        }
      ]
    }));
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
