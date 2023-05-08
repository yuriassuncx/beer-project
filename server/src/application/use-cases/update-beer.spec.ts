import { UpdateBeerBody } from "@infra/http/dtos/update-beer-body";
import { InMemoryBeersRepository } from "@test/repositories/in-memory-beers-repository";

describe('Update Beer', () => {
  it('should be able to update a beer by specific id', async () => {
    const beersRepository = new InMemoryBeersRepository();

    const updatedBeerData: UpdateBeerBody = {
      description: 'updated description',
      image_url: 'updated image_url',
      name: 'updated name',
      type: 'updated type',
      price: 15
    };

    await beersRepository.create({
      id: 'teste',
      description: 'original description',
      image_url: 'original image_url',
      name: 'original name',
      type: 'original type',
      price: 10
    });

    const updatedBeer = await beersRepository.update('teste', updatedBeerData);

    expect(updatedBeer).toEqual(expect.objectContaining(updatedBeerData));
  });
});
