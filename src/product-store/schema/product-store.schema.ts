import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export class PromotionSub {
  @Prop()
  type?: string;
  @Prop()
  text?: string;
  @Prop()
  icon?: string;
}

@Schema()
export class ProductStore {
  @Prop()
  product_id: number;
  @Prop()
  type?: string;
  @Prop()
  name: string;
  @Prop()
  category_ids?: number[];
  @Prop()
  category_id?: number;
  @Prop()
  shop_id?: number;
  @Prop()
  price: number;
  @Prop()
  max_price?: number;
  @Prop()
  final_price: number;
  @Prop()
  max_final_price?: number;
  @Prop()
  shop_warehouse_city_id?: number;
  @Prop()
  shop_warehouse_city?: string;
  @Prop()
  ship_method?: string[];
  @Prop()
  thumbnail_url: string;
  @Prop()
  original_img_url?: string;
  @Prop()
  min_price?: string;
  @Prop()
  price_range?: string;
  @Prop()
  original_price?: string;
  @Prop()
  rating_percent?: number;
  @Prop()
  total_rating?: number;
  @Prop({ type: PromotionSub })
  promotion_sub_message?: PromotionSub;
  @Prop()
  shop_name?: string;
  @Prop()
  button_text?: string;
  @Prop()
  buy_limit?: number;
  @Prop()
  promotion_percentage?: number;
  @Prop()
  quantity?: number;
  @Prop()
  remaining?: number;
  @Prop()
  order_count?: number;
  @Prop()
  order_count_text?: string;
  @Prop()
  app_discount_percentage?: number;
  @Prop()
  final_promotion_percent?: number;
  @Prop()
  promotion_percent_upto?: string;
  @Prop()
  is_shipping_supported?: boolean;
  @Prop()
  is_empty?: boolean;
  @Prop()
  has_video?: boolean;
  @Prop()
  is_senmall?: boolean;
  @Prop()
  is_shop_plus?: boolean;
  @Prop()
  is_self_shipping?: boolean;
  @Prop()
  is_certified?: boolean;
  @Prop()
  is_in_promotion?: boolean;
  @Prop()
  in_flash_sale?: boolean;
  @Prop()
  shop_badge_url?: string;
  @Prop()
  event_banners?: string;
}

type ProductStoreDocument = HydratedDocument<ProductStore>;

const ProductStoreSchema = SchemaFactory.createForClass(ProductStore);

export { ProductStoreDocument, ProductStoreSchema };
