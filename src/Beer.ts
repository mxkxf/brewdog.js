import { client } from './client';

type IHopAdd = 'start' | 'end';
type IHopAttribute = 'bitter' | 'aroma';

type IValue = {
  value: number;
  unit: 'litres' | 'kilograms' | 'grams' | 'celsius';
};

type IBeer = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: IValue;
  boil_volume: IValue;
  method: { mash_temp: []; fermentation: []; twist: null };
  ingredients: {
    malt: {
      name: string;
      amount: IValue;
    }[];
    hops: {
      name: string;
      amount: IValue;
      add: IHopAdd;
      attribute: IHopAttribute;
    }[];
    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
};

export default class Beer {
  /**
   * Get all the beers.
   */
  public async all(
    params: Record<string, string | number | boolean> = {}
  ): Promise<IBeer[]> {
    const response = await client.get('beers', { params });

    return response.data;
  }

  /**
   * Get a single beer by ID.
   */
  public async find(id: number): Promise<IBeer> {
    const response = await client.get<IBeer>(`beers/${id}`);

    return response.data;
  }

  /**
   * Get a random beer.
   */
  public async random(): Promise<IBeer> {
    const response = await client.get<IBeer>('beers/random');

    return response.data;
  }
}
