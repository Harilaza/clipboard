import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Text } from 'src/interfaces/text/text.interface';
import { TextDTO } from 'src/interfaces/text/dto/text.dto';

@Injectable()
export class TextService {
  constructor(private prisma: PrismaService) {}

  async getAllText(): Promise<Text[]> {
    return this.prisma.text.findMany({
      include: {
        category: true,
        user: true,
      },
    });
  }
  async createText(data: TextDTO): Promise<Text> {
    return this.prisma.text.create({
      data,
    });
  }

  async updateText(id: number, data: string): Promise<Text> {
    return this.prisma.text.update({
      where: { id: Number(id) },
      data: { copied: true },
    });
  }
  async reinitialised(id: number): Promise<Text[]> {
    const allItems = await this.prisma.text.findMany({
      where: {
        category_id: Number(id),
      },
    });

    for (const record of allItems) {
      await this.prisma.text.update({
        where: { id: record.id },
        data: { copied: false },
      });
    }

    return allItems;
  }
}
