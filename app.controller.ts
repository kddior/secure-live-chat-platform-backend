import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Remove any prefix to correctly handle both '/' and '/api'
@Controller()  // Ensure there is NO prefix here
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')  // Maps to GET /
  getRoot(): string {
    return 'Welcome to Secure Live Chat Platform Backend!';  // Message for the root path
  }

  @Get('/api')  // Maps to GET /api
  getHello(): string {
    return this.appService.getHello();  // Message for /api path
  }
}
