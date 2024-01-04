import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ExampleDto } from './example.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() params: ExampleDto): string {
    return this.appService.getHello();
  }
}
