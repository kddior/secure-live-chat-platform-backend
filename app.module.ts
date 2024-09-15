import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from './redis/redis.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost', // Ensure this matches the .env configuration
      port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'password',
      database: process.env.POSTGRES_DB || 'secure_live_chat',
      autoLoadEntities: true,
      synchronize: true, // Set to false in production
    }),
    RedisModule, // Your custom Redis module
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
