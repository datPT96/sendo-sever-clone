import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseService } from 'src/base.service';
import { ProductFilter } from './Schema/product-filter.schema';

@Injectable()
export class ProductFilterService extends BaseService<ProductFilter> {
  constructor(
    @InjectModel(ProductFilter.name) locationService: Model<ProductFilter>,
  ) {
    super(locationService);
  }

  async getAll() {
    return await this.findAll();
  }
}
