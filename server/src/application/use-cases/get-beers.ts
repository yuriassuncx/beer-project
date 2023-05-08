import { Injectable } from "@nestjs/common";
import { BeersRepository } from "@application/repositories/beers-repository";
import { Beer } from "../entities/beer";

@Injectable()
export class GetBeers {
  constructor (private readonly beersRepository: BeersRepository) {}

  async execute(): Promise<Beer[]> {
    const beers = await this.beersRepository.findMany();
    return beers;
  }
}
