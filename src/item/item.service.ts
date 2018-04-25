import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Item } from './item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private readonly repository: Repository<Item>,
  ) {}

  async findAll(): Promise<Item[]> {
    try {
      return await this.repository.find({});
    } catch (err) {
      return err;
    }
  }

  async findById(id: string): Promise<Item> {
    try {
      return await this.repository.findOne(id);
    } catch (err) {
      return err;
    }
  }

  async insert(item: Item): Promise<Item> {
    const newItem = new Item();

    Object.keys(item).forEach(key => {
      newItem[key] = item[key];
    });

    try {
      return await this.repository.save(newItem);
    } catch (err) {
      return err;
    }
  }

  async update(oldItem: Item, updatedValues: Item): Promise<Item> {
    const updatedItem = oldItem;

    Object.keys(updatedValues).forEach(key => {
      updatedItem[key] = updatedValues[key];
    });

    try {
      return await this.repository.save(updatedItem);
    } catch (err) {
      return err;
    }
  }

  async delete(item: Item) {
    try {
      return await this.repository.remove(item);
    } catch (err) {
      return err;
    }
  }
}
