import { Beer } from "@application/entities/beer";
import { BeersRepository } from "@application/repositories/beers-repository";
import { PrismaService } from "../prisma.service";
import { PrismaBeerMapper } from "../mappers/prisma-beer-mapper";
import { Injectable } from "@nestjs/common";
import { UpdateBeerBody } from "@infra/http/dtos/update-beer-body";

@Injectable()
export class PrismaBeersRepository implements BeersRepository {
  constructor (private readonly prisma: PrismaService) {}
  
  async create(beer: Beer): Promise<void> {
    const raw = PrismaBeerMapper.toPrisma(beer);

    await this.prisma.beer.create({
      data: raw,
    });
  }

  async findMany(): Promise<Beer[]> {
    const beers = await this.prisma.beer.findMany();
    return beers;
  }

  async findById(beerId: string): Promise<Beer | null> {
    const filteredBeer = await this.prisma.beer.findUnique({
      where: {
        id: beerId,
      }
    });

    if (!filteredBeer) {
      throw new Error('Beer not found!');
    }

    return filteredBeer;
  }

  async update(beerId: string, updateBeer: UpdateBeerBody): Promise<Beer> {
    const beer = await this.prisma.beer.update({
      where: {
        id: beerId,
      },
      data: updateBeer
    });

    if (!beer) {
      throw new Error('Beer not found!');
    }

    return beer;
  }

  async delete(beerId: string): Promise<void> {
    await this.prisma.beer.delete({
      where: {
        id: beerId,
      }
    });
  }
}
