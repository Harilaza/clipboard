import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './services/prisma/prisma.service';
import { CategoryService } from './services/category/category.service';
import { CategoryController } from './controllers/category/category.controller';
import { TextService } from './services/text/text.service';
import { TextController } from './controllers/text/text.controller';

@Module({
  imports: [],
  controllers: [AppController, CategoryController, TextController],
  providers: [AppService, PrismaService, CategoryService, TextService],
})
export class AppModule {}
