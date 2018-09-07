import axios from "axios";
import { Beer as Client } from "./../index";

jest.mock("axios");

const client = new Client();

test("gets a paginated list of beers", async () => {
    axios.get.mockResolvedValue({
        data: [{
            name: "Punk IPA",
        }],
    });

    const results = await client.all();

    expect(results[0]).toHaveProperty("name");
});

test("get a single beer by ID", async () => {
    axios.get.mockResolvedValue({
        data: [{
            name: "Punk IPA",
        }],
    });

    const result = await client.find(1);

    expect(result[0]).toHaveProperty("name");
});

test("gets a random beer", async () => {
    axios.get.mockResolvedValue({
        data: [{
            name: "Punk IPA",
        }],
    });

    const result = await client.random();

    expect(result[0]).toHaveProperty("name");
});
