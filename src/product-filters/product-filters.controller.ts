import { Controller, Get } from '@nestjs/common';

import { ProductFilterService } from './product-filters.service';

@Controller('filters')
export class ProductFilterController {
  constructor(private readonly filterService: ProductFilterService) {}

  @Get()
  async getListFilter() {
    return await this.filterService.getAll();
  }
}
