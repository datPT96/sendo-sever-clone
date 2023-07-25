import { Controller, Get } from '@nestjs/common';
import { ProductStoreService } from './product-store.service';

@Controller('products')
export class ProductStoreController {
  constructor(private readonly productService: ProductStoreService) {}

  @Get()
  async getAllProducts() {
    return await this, this.productService.getAllProducts();
  }
}
