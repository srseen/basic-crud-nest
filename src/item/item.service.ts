import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './schemas/item.schema';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name) private readonly itemModel: Model<Item>,
  ) {}

  async create(dto: CreateItemDto): Promise<Item> {
    const newItem = new this.itemModel(dto);
    return newItem.save();
  }

  async findAll(): Promise<Item[]> {
    return this.itemModel.find();
  }

  async findOne(id: string): Promise<Item | null> {
    return this.itemModel.findById(id);
  }

  async update(id: string, dto: CreateItemDto): Promise<Item | null> {
    return this.itemModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async remove(id: string): Promise<Item | null> {
    return this.itemModel.findByIdAndDelete(id);
  }
}
