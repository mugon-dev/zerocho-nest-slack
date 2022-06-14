import { Module } from '@nestjs/common';
import { DMsService } from './dms.service';
import { DmsController } from './dms.controller';
import { Workspaces } from '../entities/Workspaces.entity';
import { Users } from '../entities/Users.entity';
import { DMs } from '../entities/DMs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [TypeOrmModule.forFeature([DMs, Users, Workspaces]), EventsModule],
  providers: [DMsService],
  controllers: [DmsController],
})
export class DmsModule {}
