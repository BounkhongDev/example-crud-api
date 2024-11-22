import { Module } from '@nestjs/common';
import { RolesModule } from './roles/roles.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [RolesModule],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
