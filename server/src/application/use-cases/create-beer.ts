import { Injectable } from "@nestjs/common";
import { BeersRepository } from "@application/repositories/beers-repository";
import { Beer } from "../entities/beer";

interface CreateBeerResponse {
  beer: Beer;
}

@Injectable()
export class CreateBeer {
  constructor (private readonly beersRepository: BeersRepository) {}

  async execute(request: Omit<Beer, "id">): Promise<CreateBeerResponse> {
    const { name, image_url, description, price, type } = request;

    const beer = new Beer({
      description,
      image_url,
      name,
      price,
      type
    });

    await this.beersRepository.create(beer);

    return {
      beer
    }
  }
}
