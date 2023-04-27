import { AUTHORIZATION_KEY } from '@/constants';
import { getBearerToken } from '@/util';
import { sleep } from '@/util/sleep';
import { rest } from 'msw';

export const postHandler = [
  rest.get('/posts', (req, res, ctx) => {
    const user = req.url.searchParams.get('username');

    if (!user) return res(ctx.status(400), ctx.json({}));

    return res(ctx.status(200), ctx.json({}));
  }),
  rest.get<never, { id: string }>('/posts/:id', async (req, res, ctx) => {
    const { id } = req.params;

    req.url.searchParams;
    return res(
      ctx.status(200),
      ctx.json({
        id: 12,
      }),
    );
  }),
  // rest.post('/posts', async (req, res, ctx) => {
  //   if (!getBearerToken(req.headers.get(AUTHORIZATION_KEY)) || !req.headers.get('Content-Type')?.includes('multipart/form-data'))
  //     return res(
  //       ctx.status(400),
  //       ctx.json({
  //         ok: false,
  //         error: {
  //           message: 'Invalid Header',
  //         },
  //       }),
  //     );

  //   return res(
  //     ctx.status(201),
  //     ctx.json({
  //       ok: true,
  //     }),
  //   );
  // }),
];
