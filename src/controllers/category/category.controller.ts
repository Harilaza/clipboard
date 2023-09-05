import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Category } from 'src/interfaces/category/category.interface';
import { CategoryDTO } from 'src/interfaces/category/dto/category.dto';
import { CategoryService } from 'src/services/category/category.service';

@Controller('category')
@ApiTags('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  // Get all Category
  @Get()
  async AllCategory(): Promise<Category[]> {
    return this.categoryService.getAllCategory();
  }

  // Controller get one category
  @Get(':id')
  async GetCategory(@Param('id') id: number): Promise<Category> {
    return this.categoryService.getCategory(id);
  }

  // Create Category
  @Post()
  async CreateCategory(@Body() CategoryPost: CategoryDTO): Promise<Category> {
    return this.categoryService.createCategory(CategoryPost);
  }
}
