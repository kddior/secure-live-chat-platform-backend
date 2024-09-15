import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Ensure there's no global prefix that could cause route issues
  // app.setGlobalPrefix('api');  // Ensure this line is commented out or removed

  await app.listen(3000);
  console.log(`Application is running on: http://localhost:3000`);
}

bootstrap();
