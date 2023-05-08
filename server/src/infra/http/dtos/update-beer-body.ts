import { PartialType } from '@nestjs/mapped-types';
import { CreateBeerBody } from './create-beer-body';

export class UpdateBeerBody extends PartialType(CreateBeerBody) {}