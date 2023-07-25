import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

@Schema({ versionKey: false })
class Category {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  url_path: string;

  @Prop()
  parent_id: Types.ObjectId;
}

type CategoryDocument = HydratedDocument<Category>;

const CategorySchema = SchemaFactory.createForClass(Category);

export { Category, CategoryDocument, CategorySchema };
