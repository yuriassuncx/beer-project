import { IsNotEmpty, IsNumber, IsUrl, Length } from 'class-validator';

export class CreateBeerBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Length(5, 240)
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  type: string;

  @IsNotEmpty()
  @IsUrl()
  image_url: string;
}
