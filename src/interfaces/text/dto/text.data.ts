import { ApiProperty } from '@nestjs/swagger';
// import { IsNotEmpty, IsString } from 'class-validator';

// DTO pour une requête POST
export class TextData {
  @ApiProperty()
  //   @IsString()
  //   @IsNotEmpty()
  readonly content: string;

  @ApiProperty()
  readonly category_id: number;

  @ApiProperty()
  readonly user_id: number;
}
