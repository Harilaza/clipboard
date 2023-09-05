import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Category } from 'src/interfaces/category/category.interface';
import { CategoryDTO } from 'src/interfaces/category/dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getAllCategory(): Promise<Category[]> {
    return this.prisma.category.findMany({
      include: {
        texts: true,
      },
    });
  }
  async createCategory(data: CategoryDTO): Promise<Category> {
    return this.prisma.category.create({
      data,
    });
  }
  //   async updateCategory(id: number, data: CategoryDTO): Promise<Category> {
  //     return this.prisma.category.update({
  //       where: { id: Number(id) },
  //     });
  //   }
  async getCategory(id: number): Promise<Category> {
    return this.prisma.category.findUnique({
      where: { id: Number(id) },
      include: {
        texts: true,
      },
    });
  }
  async deleteCategory(id: number): Promise<Category> {
    return this.prisma.category.delete({
      where: { id: Number(id) },
    });
  }
}
