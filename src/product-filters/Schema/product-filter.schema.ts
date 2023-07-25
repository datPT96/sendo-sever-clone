import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class ProductFilter {
  @Prop()
  attribute_term: string;

  @Prop()
  atrribute_name: string;

  @Prop()
  attribute_key: string;

  @Prop()
  attribute_value: [];
}

type ProductFilterDocument = HydratedDocument<ProductFilter>;

const ProductFilterSchema = SchemaFactory.createForClass(ProductFilter);

export { ProductFilterDocument, ProductFilterSchema };
