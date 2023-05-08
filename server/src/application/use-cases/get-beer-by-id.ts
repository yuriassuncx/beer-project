import { Injectable } from "@nestjs/common";
import { BeersRepository } from "@application/repositories/beers-repository";
import { Beer } from "../entities/beer";

interface GetBeerByIdRequest {
  beerId: string;
}

@Injectable()
export class GetBeerById {
  constructor (private readonly beersRepository: BeersRepository) {}

  async execute(request: GetBeerByIdRequest): Promise<Beer | null> {
    const { beerId } = request;

    const beer = await this.beersRepository.findById(beerId);
    return beer ?? null;
  }
}
