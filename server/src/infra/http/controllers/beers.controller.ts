import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateBeerBody } from '../dtos/create-beer-body';
import { CreateBeer } from '@application/use-cases/create-beer';
import { GetBeers } from '@application/use-cases/get-beers';
import { GetBeerById } from '@application/use-cases/get-beer-by-id';
import { UpdateBeer } from '@application/use-cases/update-beer';
import { UpdateBeerBody } from '../dtos/update-beer-body';
import { DeleteBeer } from '@application/use-cases/delete-beer';

@Controller('beers')
export class BeersController {
  constructor(
    private createBeer: CreateBeer,
    private getBeers: GetBeers,
    private getBeerById: GetBeerById,
    private updateBeer: UpdateBeer,
    private deleteBeer: DeleteBeer,
  ) {}

  @Get()
  async findMany() {
    const beers = await this.getBeers.execute();

    return {
      beers
    };
  }

  @Get(':beerId')
  async findById(@Param('beerId') beerId: string) {
    const beer = await this.getBeerById.execute({
      beerId,
    });

    return {
      beer
    };
  }

  @Post()
  async create(@Body() body: CreateBeerBody) {
    const { description, name, price, image_url, type } = body;

    const { beer } = await this.createBeer.execute({
      price,
      description,
      image_url,
      name,
      type,
    });

    return {
      beer
    };
  }

  @Patch(':beerId')
  async update(@Param('beerId') beerId: string, @Body() updateBeer: UpdateBeerBody) {
    const beer = await this.updateBeer.execute(beerId, updateBeer);

    return {
      beer
    };
  }

  @Delete(':beerId')
  async delete(@Param('beerId') beerId: string) {
    const beer = await this.deleteBeer.execute(beerId);

    return beer;
  }
}
