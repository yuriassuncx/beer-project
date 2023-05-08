import { Beer } from "../../src/application/entities/beer";

interface BeerProps {
  id: string;
  name: string;
  description: string;
  image_url: string;
  type?: string;
  price: number;  
}

type Override = Partial<BeerProps>;

export function makeBeer(override: Override = {}) {
  return new Beer({
    id: 'teste',
    name: 'Cerveja IPA',
    description: 'Cerveja com amargor e aroma de lúpulo.',
    price: 12,
    type: 'Ale',
    image_url: 'https://giassi.vtexassets.com/arquivos/ids/581381/Cerveja-IPA-Lagunitas-Garrafa-355ml.png?v=638137981168400000',
    ...override
  })
}
