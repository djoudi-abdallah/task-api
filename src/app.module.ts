import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [TaskModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
