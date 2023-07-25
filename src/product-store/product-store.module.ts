import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ProductStore,
  ProductStoreSchema,
} from './schema/product-store.schema';
import { ProductStoreController } from './product-store.controller';
import { ProductStoreService } from './product-store.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductStore.name, schema: ProductStoreSchema },
    ]),
  ],
  controllers: [ProductStoreController],
  providers: [ProductStoreService],
})
export class ProductStoreModule {}
