import { client } from './client';
import { IBeer } from './types';

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
    const response = await client.get<IBeer[]>(`beers/${id}`);

    return response.data[0];
  }

  /**
   * Get a random beer.
   */
  public async random(): Promise<IBeer> {
    const response = await client.get<IBeer[]>('beers/random');

    return response.data[0];
  }
}
