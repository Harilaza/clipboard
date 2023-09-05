import { ApiProperty } from '@nestjs/swagger';
// import { IsNotEmpty, IsString } from 'class-validator';

// DTO pour une requête POST
export class CategoryDTO {
  @ApiProperty()
  //   @IsString()
  //   @IsNotEmpty()
  readonly title: string;
}
