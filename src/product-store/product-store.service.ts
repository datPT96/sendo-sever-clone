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

  // async findByName(name?: string) {
  //   return await this.findAllByCondition({
  //     name: { $regex: `^.*${name}.*$` } ?? null,
  //   });
  // }

  async getListFilter(params: Params) {
    const listCity = params.shop_warehouse_city_id?.split(',');
    const listConfig = listCity?.map((item) => ({
      shop_warehouse_city_id: Number(item),
    }));
    const campaign_ids = params.campaign_id?.split(',');
    const listCampaigns = campaign_ids?.map((item) => ({
      campaign_id: Number(item),
    }));
    // console.log(p, s);
    const sort =
      params.sort === 'ban-chay'
        ? { order_count: -1 }
        : params.sort === 'khuyen-mai'
        ? { promotion_percentage: -1 }
        : params.sort === 'danh-gia-tot'
        ? { rating_percent: -1 }
        : {};

    const filter = {
      $and: [
        params.name
          ? { name: { $regex: `^.*${params.name}.*$`, $options: 'i' } }
          : {},
        params.shop_warehouse_city_id ? { $or: [...listConfig] } : {},
        params.campaign_id ? { $or: [...listCampaigns] } : {},
        params.is_using_instant
          ? { is_using_instant: params.is_using_instant }
          : {},
        params.is_using_in_day
          ? { is_using_in_day: params.is_using_in_day }
          : {},
        params.is_using_standard
          ? { is_using_standard: params.is_using_standard }
          : {},
        params.is_senmall ? { is_senmall: params.is_senmall } : {},
        params.is_shop_plus ? { is_shop_plus: params.is_shop_plus } : {},
        params.is_shipping_support
          ? { is_shipping_supported: params.is_shipping_support }
          : {},
        params.is_shop_certificated
          ? { is_shop_certificated: params.is_shop_certificated }
          : {},
        params.is_combo_discount
          ? { is_combo_discount: Number(params.is_combo_discount) }
          : {},
        params.is_shipping_discount
          ? { is_shipping_discount: Number(params.is_shipping_discount) }
          : {},
        params.is_promotion
          ? { is_promotion: Number(params.is_promotion) }
          : {},
        params.is_installment
          ? { is_installment: Number(params.is_installment) }
          : {},
        params.is_pay_later
          ? { is_pay_later: Number(params.is_pay_later) }
          : {},
        params.promotion_app
          ? { promotion_app: Number(params.promotion_app) }
          : {},
        params.is_quantity_discount
          ? { is_quantity_discount: Number(params.is_quantity_discount) }
          : {},
        params.is_mega_voucher
          ? { is_mega_voucher: Number(params.is_mega_voucher) }
          : {},
        params.is_flash_sale
          ? { is_flash_sale: Number(params.is_flash_sale) }
          : {},

        {
          $and: [
            params.final_price
              ? { final_price: { $gte: Number(params.final_price) } }
              : {},
            params.max_final_price
              ? { final_price: { $lte: Number(params.max_final_price) } }
              : {},
            params.rating_percent
              ? { rating_percent: { $gte: Number(params.rating_percent) } }
              : {},
          ],
        },
      ],
    };
    const data = await this.findAllByCondition(
      filter,
      sort,
      {},
      {},
      params.p,
      params.s,
    );
    const totalDoc = await this.countDocument(filter);
    const totalPage = Math.floor((totalDoc - 1) / params.s + 1);
    return {
      datas: data,
      page: Number(params.p),
      total_document: data.length,
      total_page: totalPage,
      status: 200,
    };
  }
}
