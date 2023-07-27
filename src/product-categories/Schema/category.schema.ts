import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';

@Schema({ versionKey: false })
class Category extends Document {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  url_path: string;

  @Prop()
  parent_id: Types.ObjectId;

  @Prop()
  is_selected: boolean;
}

type CategoryDocument = HydratedDocument<Category>;

const CategorySchema = SchemaFactory.createForClass(Category);

export { Category, CategoryDocument, CategorySchema };
