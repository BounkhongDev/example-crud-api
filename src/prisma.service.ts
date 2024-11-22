import {
  Injectable,
  OnModuleInit,
  OnApplicationShutdown,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnApplicationShutdown
{
  private isConnected = false;

  async onModuleInit() {
    if (!this.isConnected) {
      await this.$connect();
      this.isConnected = true;
      console.log('Database connected');
    }
  }

  async onApplicationShutdown() {
    if (this.isConnected) {
      await this.$disconnect();
      this.isConnected = false;
      console.log('Database disconnected');
    }
  }
}
