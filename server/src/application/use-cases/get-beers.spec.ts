import { InMemoryBeersRepository } from "@test/repositories/in-memory-beers-repository";
import { GetBeers } from "./get-beers";
import { makeBeer } from "@test/factories/beer-factory";

describe('Get beers', () => {
  it('should be able to get beers', async () => {
    const beersRepository = new InMemoryBeersRepository();
    const getBeers = new GetBeers(beersRepository);

    await beersRepository.create(
      makeBeer({ name: 'teste1' }),
    );

    await beersRepository.create(
      makeBeer({ name: 'teste2' }),
    );

    const beers = await getBeers.execute();

    expect(beers).toHaveLength(2);
    expect(beers).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: 'teste1' }),
      expect.objectContaining({ name: 'teste2' }),
    ]));
  });
});
