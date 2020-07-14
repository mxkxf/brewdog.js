import axios, { AxiosResponse } from "axios";
import { Beer as Client } from "./../index";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const client = new Client();

test("gets a paginated list of beers", async () => {
  mockedAxios.get.mockResolvedValue({
    data: [
      {
        name: "Punk IPA",
      },
    ],
  } as any);

  const results = await client.all();

  expect(results[0]).toHaveProperty("name");
});

test("gets a filtered, paginated list of beers", async () => {
  mockedAxios.get.mockResolvedValue({
    data: [
      {
        name: "Hardcore IPA",
      },
    ],
  } as any);

  const results = await client.all({
    abv_gt: 6,
  });

  expect(results[0]).toHaveProperty("name");
});

test("get a single beer by ID", async () => {
  mockedAxios.get.mockResolvedValue({
    data: [
      {
        name: "Punk IPA",
      },
    ],
  } as any);

  const result = await client.find(1);

  expect(result[0]).toHaveProperty("name");
});

test("gets a random beer", async () => {
  mockedAxios.get.mockResolvedValue({
    data: [
      {
        name: "Punk IPA",
      },
    ],
  } as any);

  const result = await client.random();

  expect(result[0]).toHaveProperty("name");
});
