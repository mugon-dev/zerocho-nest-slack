import { Module } from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { ChannelsController } from './channels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Channels } from '../entities/Channels.entity';
import { ChannelChats } from '../entities/ChannelChats.entity';
import { Users } from '../entities/Users.entity';
import { Workspaces } from '../entities/Workspaces.entity';
import { ChannelMembers } from '../entities/ChannelMembers.entity';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Channels,
      ChannelChats,
      Users,
      Workspaces,
      ChannelMembers,
    ]),
    EventsModule,
  ],
  providers: [ChannelsService],
  controllers: [ChannelsController],
})
export class ChannelsModule {}
