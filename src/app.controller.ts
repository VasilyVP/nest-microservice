import { Controller /* , Get  */ } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
//import { AppService } from './app.service';

@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[] = []): number | string {
    console.log('data: ', data.length);

    const sum = data.reduce((a, b) => a + b);

    const res = JSON.stringify(sum);

    return res;
  }
}
