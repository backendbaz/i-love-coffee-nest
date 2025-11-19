import {
  IsArray,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  @Matches(/^[a-zA-Z][a-zA-Z\s]*$/, {
    message:
      'name must be start with a letter, and contain only letters (a-z or A-Z) and spaces!',
  })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  @Matches(/^[a-zA-Z][a-zA-Z\s]*$/, {
    message:
      'brand must be start with a letter, and contain only letters (a-z or A-Z) and spaces!',
  })
  readonly brand: string;

  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @MinLength(3, { each: true })
  @MaxLength(96, { each: true })
  @Matches(/^[a-zA-Z][a-zA-Z\s]*$/, {
    each: true,
    message:
      'each flavor must be start with a letter, and contain only letters (a-z or A-Z) and spaces!',
  })
  @IsArray()
  readonly flavors: string[];
}
