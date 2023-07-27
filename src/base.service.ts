import { Document, Model, QueryOptions } from 'mongoose';

export abstract class BaseService<T extends Document> {
  constructor(private readonly model: Model<T>) {}

  async create(doc): Promise<any> {
    const createedDoc = new this.model(doc);
    return await createedDoc.save();
  }

  async countDocument(filter): Promise<any> {
    return await this.model.countDocuments(filter);
  }

  async findAll(): Promise<T[]> {
    return await this.model.find().exec();
  }

  async findById(id: string, option?: QueryOptions): Promise<T> {
    return this.model.findById(id, option);
  }

  async findByCondition(
    filter,
    field?: any | null,
    option?: any | null,
    populate?: any | null,
  ) {
    return await this.model
      .findOne(filter, field, option)
      .populate(populate)
      .exec();
  }

  async findAllByCondition(
    filter,
    sort,
    field?: any | null,
    option?: any | null,
    p?: number,
    s?: number,
  ): Promise<T[]> {
    return await this.model
      .find(filter, field, option)
      .skip((p - 1) * s)
      .limit(s)
      .sort(sort);
  }
}
