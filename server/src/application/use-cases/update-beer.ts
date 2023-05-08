import { Beer } from "@application/entities/beer";
import { BeersRepository } from "@application/repositories/beers-repository";
import { UpdateBeerBody } from "@infra/http/dtos/update-beer-body";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UpdateBeer {
  constructor (private readonly beersRepository: BeersRepository) {}

  async execute(beerId: string, body: UpdateBeerBody): Promise<Beer> {
    const beer = await this.beersRepository.update(beerId, body);
    return beer;
  }
}
