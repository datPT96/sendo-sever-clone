import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Category } from './Schema/category.schema';
import { BaseService } from 'src/base.service';

@Injectable()
export class CategoryService extends BaseService<Category> {
  constructor(@InjectModel(Category.name) categoryService: Model<Category>) {
    super(categoryService);
  }

  async createCategory(data) {
    return await this.create(data);
  }

  // async getNestCategory() {
  //   return await this.findByCondition();
  // }

  async getAll() {
    try {
      const categories = await this.findAll();
      if (!categories) {
        return [];
      }
      return this.nestedCategories(categories);
    } catch (err) {
      console.log(err);
    }
  }

  nestedCategories = (categories: Category[], parent_id = null) => {
    const categoriesList = [];
    let category;
    if (parent_id == undefined) {
      category = categories.filter((cat) => cat.parent_id == undefined);
    } else {
      category = categories.filter(
        (cat) => String(cat.parent_id) == String(parent_id),
      );
    }

    for (const cat of category) {
      categoriesList.push({
        _id: cat._id,
        id: cat.id,
        name: cat.name,
        url_path: cat.url_path,
        is_selected: cat.is_selected,
        sub_category: this.nestedCategories(categories, cat._id),
      });
    }

    return categoriesList;
  };
}
