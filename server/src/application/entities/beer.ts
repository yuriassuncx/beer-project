import { v4 as uuid } from 'uuid';

export class Beer {
  public readonly id: string;

  public name: string;
  public description: string;
  public type: string;
  public image_url: string;
  public price: number;

  constructor(props: Omit<Beer, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}