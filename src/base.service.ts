import { Model } from 'mongoose';

export abstract class BaseService<T> {
  private baseService: Model<T>;

  protected constructor(baseService: Model<T>) {
    this.baseService = baseService;
  }

  async create(data): Promise<T> {
    return await this.baseService.create(data);
  }

  async findAll(): Promise<T[]> {
    return await this.baseService.find().exec();
  }

  async findByCondition(): Promise<T[]> {
    return await this.baseService.find({}).populate('parent_id').exec();
  }
}
