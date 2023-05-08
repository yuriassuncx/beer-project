import { Beer } from "@application/entities/beer";
import { BeersRepository } from "@application/repositories/beers-repository";
import { UpdateBeerBody } from "@infra/http/dtos/update-beer-body";

export class InMemoryBeersRepository implements BeersRepository {
  public beers: Beer[] = [];

  async create(beer: Beer): Promise<void> {
    this.beers.push(beer);
  }

  async findMany(): Promise<Beer[]> {
    return this.beers.map(item => item);
  }

  async findById(beerId: string): Promise<Beer | null> {
    const beer = this.beers.find((beer) => beer.id === beerId)

    return beer || null;
  }

  async update(beerId: string, updateBeer: UpdateBeerBody): Promise<Beer> {
    const beerIndex = this.beers.findIndex((beer) => beer.id === beerId);

    if (beerIndex === -1) {
      throw new Error('Beer not found');
    }

    const updatedBeer = {
      ...this.beers[beerIndex],
      ...updateBeer,
    };

    this.beers[beerIndex] = updatedBeer;

    return updatedBeer;
  }

  async delete(beerId: string): Promise<void> {
    const beerIndex = this.beers.findIndex((beer) => beer.id === beerId);

    if (beerIndex === -1) {
      throw new Error('Beer not found');
    }
  
    this.beers.splice(beerIndex, 1);
  }
}
