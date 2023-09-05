import { TextService } from './../../services/text/text.service';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TextData } from 'src/interfaces/text/dto/text.data';
import { TextDTO } from 'src/interfaces/text/dto/text.dto';
import { Text } from 'src/interfaces/text/text.interface';

@Controller('text')
@ApiTags('text')
export class TextController {
  private textDTO: TextDTO;
  constructor(private readonly textService: TextService) {}

  @Get()
  getAllText(): Promise<Text[]> {
    return this.textService.getAllText();
  }

  @Post()
  createText(@Body() formData: TextData): Promise<Text> {
    this.textDTO = {
      content: formData.content,
      copied: false,
      category_id: +formData.category_id,
      user_id: formData.user_id,
    };
    return this.textService.createText(this.textDTO);
  }

  @Put(':id')
  async UpdateCategory(@Param('id') id: number, data: string): Promise<Text> {
    return this.textService.updateText(id, data);
  }

  @Get(':id')
  async reinitialisation(@Param('id') id: number): Promise<Text[]> {
    return this.textService.reinitialised(id);
  }
}
