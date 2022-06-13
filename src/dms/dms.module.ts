import { Module } from '@nestjs/common';
import { DmsService } from './dms.service';
import { DmsController } from './dms.controller';
import { Workspaces } from '../entities/Workspaces.entity';
import { Users } from '../entities/Users.entity';
import { DMs } from '../entities/DMs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DMs, Users, Workspaces])],
  providers: [DmsService],
  controllers: [DmsController],
})
export class DmsModule {}
