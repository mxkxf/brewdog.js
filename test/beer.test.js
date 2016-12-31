import Beer from '../src/Beer';

const beer = new Beer();

describe('Beer', () => {
    it('gets a paginated list of beers', () => {
        fetch.mockResponse(JSON.stringify([{
            name: 'Punk IPA'
        }]));

        beer.all(beers => {
            expect(beers[0].name).toEqual('Punk IPA');
        });
    });

    it('get a single beer by ID', () => {
        fetch.mockResponse(JSON.stringify({
            name: 'Punk IPA'
        }));

        beer.find(1, beer => {
            expect(beer.name).toEqual('Punk IPA');
        });
    });

    it('gets a random beer', () => {
        fetch.mockResponse(JSON.stringify({
            name: 'Punk IPA'
        }));

        beer.random(beer => {
            expect(beer.name).toEqual('Punk IPA');
        });
    });
});
