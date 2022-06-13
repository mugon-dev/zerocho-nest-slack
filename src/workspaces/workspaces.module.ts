import { Module } from '@nestjs/common';
import { WorkspacesController } from './workspaces.controller';
import { WorkspacesService } from './workspaces.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workspaces } from '../entities/Workspaces.entity';
import { Repository } from 'typeorm';
import { Channels } from '../entities/Channels.entity';
import { WorkspaceMembers } from '../entities/WorkspaceMembers.entity';
import { ChannelMembers } from '../entities/ChannelMembers.entity';
import { Users } from '../entities/Users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Workspaces,
      Repository,
      Channels,
      WorkspaceMembers,
      ChannelMembers,
      Users,
    ]),
  ],
  controllers: [WorkspacesController],
  providers: [WorkspacesService],
})
export class WorkspacesModule {}
