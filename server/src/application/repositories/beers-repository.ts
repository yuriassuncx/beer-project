import { UpdateBeerBody } from "@infra/http/dtos/update-beer-body";
import { Beer } from "../entities/beer";

export abstract class BeersRepository {
  abstract create(beer: Beer): Promise<void>;
  abstract findMany(): Promise<Beer[]>;
  abstract findById(beerId: string): Promise<Beer | null>;
  abstract update(beerId: string, updateBeer: UpdateBeerBody): Promise<Beer>;
  abstract delete(beerId: string): Promise<void>;
}
