import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductStore } from './schema/product-store.schema';
import { Model } from 'mongoose';
import { BaseService } from 'src/base.service';

@Injectable()
export class ProductStoreService extends BaseService<ProductStore> {
  constructor(
    @InjectModel(ProductStore.name) productService: Model<ProductStore>,
  ) {
    super(productService);
  }

  async getAllProducts() {
    return await this.findAll();
  }
}
