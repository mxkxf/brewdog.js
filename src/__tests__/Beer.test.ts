import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { Beer } from '../index';

describe('Beer', () => {
  const server = setupServer(
    rest.get('https://api.punkapi.com/v2/beers', (req, res, ctx) => {
      if (req.url.search) {
        return res(
          ctx.json([
            {
              name: 'Hardcore IPA',
            },
          ])
        );
      }

      return res(
        ctx.json([
          {
            name: 'Punk IPA',
          },
        ])
      );
    }),
    rest.get('https://api.punkapi.com/v2/beers/1', (_, res, ctx) =>
      res(
        ctx.json({
          name: 'Buzz',
        })
      )
    ),
    rest.get('https://api.punkapi.com/v2/beers/random', (_, res, ctx) =>
      res(
        ctx.json({
          name: '77 Lager',
        })
      )
    )
  );

  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it('gets a paginated list of beers', async () => {
    const results = await new Beer().all();

    expect(results[0].name).toBe('Punk IPA');
  });

  it('gets a filtered, paginated list of beers', async () => {
    const results = await new Beer().all({
      abv_gt: 7,
    });

    expect(results[0].name).toBe('Hardcore IPA');
  });

  it('get a single beer by ID', async () => {
    const result = await new Beer().find(1);

    expect(result.name).toBe('Buzz');
  });

  it('gets a random beer', async () => {
    const result = await new Beer().random();

    expect(result.name).toBe('77 Lager');
  });
});
