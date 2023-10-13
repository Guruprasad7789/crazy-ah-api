import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CatsService } from './cat.service';
import { Cat } from 'schemas/cat.schema';
import { CreateCatDto } from 'dtos/cat.dto';
import { DeleteCat } from 'dtos/dog.dto';

@Controller('cat')
export class CatController {
  constructor(private catService: CatsService) { }
  @Get()
  getCats(): Promise<Cat[]> {
    return this.catService.findAll();
  }
  @Post()
  createCat(@Body() cat: CreateCatDto): Promise<Cat> {
    return this.catService.create(cat);
  }
  @Delete()
  deleteCat(@Body() deleteCat: DeleteCat): Promise<Cat> {
    return this.catService.delete(deleteCat.id);
  }
}
