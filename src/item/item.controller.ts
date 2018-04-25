import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { ItemService } from './item.service';
import { Item } from './item.entity';

@Controller('items')
export class ItemController {

  constructor(private readonly service: ItemService) {
  }

  @Get()
  async findAll(): Promise<Item[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOneById(@Param() params): Promise<Item> {
    return await this.service.findById(params.id);
  }

  @Post()
  async create(@Body() item: Item): Promise<Item> {
    return await this.service.insert(item);
  }

  @Put(':id')
  async update(@Body() updatedItem: Item, @Param() params): Promise<Item> {
    const item = await this.service.findById(params.id);
    return await this.service.update(item, updatedItem);
  }

  @Delete(':id')
  async delete(@Param() params) {
    const item = await this.service.findById(params.id);
    return await this.service.delete(item);
  }

}
