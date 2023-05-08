import { BeersRepository } from "@application/repositories/beers-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DeleteBeer {
  constructor (private readonly beersRepository: BeersRepository) {}

  async execute(beerId: string): Promise<void> {
    await this.beersRepository.delete(beerId);
  }
}
