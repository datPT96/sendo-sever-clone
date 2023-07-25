import { Controller, Get, Post, Body } from '@nestjs/common';

import { CategoryService } from './category.service';
import { Category } from './Schema/category.schema';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll() {
    return await this.categoryService.getAll();
  }

  // @Get()
  // async getListNested() {
  //   return await this.categoryService.getNestCategory();
  // }

  @Post()
  async createCategory(@Body() data: Category) {
    return await this.categoryService.create(data);
  }
}
