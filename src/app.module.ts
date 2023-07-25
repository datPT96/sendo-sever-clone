import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductCategoriesModule } from './product-categories/category.module';
import { ConfigModule } from '@nestjs/config';
import { ProductFiltersModule } from './product-filters/product-filters.module';
import { ProductStoreModule } from './product-store/product-store.module';

@Module({
  imports: [
    ProductCategoriesModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    ProductFiltersModule,
    ProductStoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
