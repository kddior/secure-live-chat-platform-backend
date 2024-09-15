import { Global, Module } from '@nestjs/common';
import Redis from 'ioredis'; // Import the Redis client library

@Global() // Make the module global so it's available in the entire application
@Module({
  providers: [
    {
      provide: 'REDIS_CLIENT', // Provide the Redis client to be injected
      useFactory: () => {
        return new Redis({
          host: process.env.REDIS_HOST || 'localhost',
          port: parseInt(process.env.REDIS_PORT, 10) || 6379,
        });
      },
    },
  ],
  exports: ['REDIS_CLIENT'], // Export the Redis client to be used in other modules
})
export class RedisModule {}
