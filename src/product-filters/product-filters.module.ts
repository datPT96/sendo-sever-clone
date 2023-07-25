import { Module } from '@nestjs/common';

import { ProductFilterController } from './product-filters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ProductFilter,
  ProductFilterSchema,
} from './Schema/product-filter.schema';
import { ProductFilterService } from './product-filters.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductFilter.name, schema: ProductFilterSchema },
    ]),
  ],
  controllers: [ProductFilterController],
  providers: [ProductFilterService],
})
export class ProductFiltersModule {}
