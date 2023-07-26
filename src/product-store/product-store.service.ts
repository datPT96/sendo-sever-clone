import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductStore } from './schema/product-store.schema';
import { Model } from 'mongoose';
import { BaseService } from 'src/base.service';
import { Params } from './product-store.controller';

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

  async findByName(name?: string) {
    return await this.findAllByCondition({
      name: { $regex: `^.*${name}.*$` } ?? null,
    });
  }

  async getListFilter(params: Params) {
    const listCity = params.shop_warehouse_city_id?.split(',');
    const listConfig = listCity?.map((item) => ({
      shop_warehouse_city_id: Number(item),
    }));
    // console.log(p, s);
    const filter = {
      $and: [
        params.name
          ? { name: { $regex: `^.*${params.name}.*$`, $options: 'i' } }
          : {},
        params.shop_warehouse_city_id ? { $or: [...listConfig] } : {},
        {
          $and: [
            params.final_price
              ? { final_price: { $gte: Number(params.final_price) } }
              : {},
            params.max_final_price
              ? { final_price: { $lte: Number(params.max_final_price) } }
              : {},
          ],
        },
      ],
    };
    return await this.findAllByCondition(filter, {}, {}, params.p, params.s);
  }
}
