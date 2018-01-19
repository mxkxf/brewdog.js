import Beer from "./../Beer";

const beers = new Beer();

interface IBeer {
    name: string;
};

test("gets a paginated list of beers", () => {
    fetch.mockResponse(JSON.stringify([{
        name: "Punk IPA",
    }]));

    beers.all((results) => {
        expect(results[0].name).toEqual("Punk IPA");
    });
});

test("get a single beer by ID", () => {
    fetch.mockResponse(JSON.stringify({
        name: "Punk IPA",
    }));

    beers.find(1, (result: IBeer) => {
        expect(result.name).toEqual("Punk IPA");
    });
});

test("gets a random beer", () => {
    fetch.mockResponse(JSON.stringify({
        name: "Punk IPA",
    }));

    beers.random((result) => {
        expect(result.name).toEqual("Punk IPA");
    });
});
