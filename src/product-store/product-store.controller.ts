import { Controller, Get, Query } from '@nestjs/common';
import { ProductStoreService } from './product-store.service';

export interface Params {
  name?: string | null;
  shop_warehouse_city_id?: string | null;
  is_using_instant?: boolean | null;
  is_using_in_day?: boolean | null;
  is_using_standard?: boolean | null;
  is_senmall?: boolean | null;
  is_shipping_support?: boolean | null;
  is_shop_certificated?: boolean | null;
  is_shop_plus?: boolean | null;
  final_price?: number | null;
  max_final_price?: number | null;
  rating_percent?: number | null;
  has_video?: boolean | null;
  p?: number;
  s?: number;
}

@Controller('products')
export class ProductStoreController {
  constructor(private readonly productService: ProductStoreService) {}

  @Get('list')
  async getAllProducts() {
    return await this.productService.getAllProducts();
  }

  @Get('product-search')
  async findByName(@Query('name') name?: string) {
    return await this.productService.findByName(name);
  }

  @Get('filter')
  async getListFilter(@Query() params: Params) {
    console.log(params);
    return await this.productService.getListFilter(params);
  }
}
