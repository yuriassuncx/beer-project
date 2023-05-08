import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { BeersController } from './http/controllers/beers.controller';
import { CreateBeer } from '@application/use-cases/create-beer';
import { GetBeers } from '@application/use-cases/get-beers';
import { GetBeerById } from '@application/use-cases/get-beer-by-id';
import { UpdateBeer } from '@application/use-cases/update-beer';
import { DeleteBeer } from '@application/use-cases/delete-beer';

@Module({
  imports: [DatabaseModule],
  controllers: [BeersController],
  providers: [
    CreateBeer,
    GetBeers,
    GetBeerById,
    UpdateBeer,
    DeleteBeer,
  ],
})
export class HttpModule {}