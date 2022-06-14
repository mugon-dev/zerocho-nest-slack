import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { ChannelChats } from '../entities/ChannelChats.entity';
import { ChannelMembers } from '../entities/ChannelMembers.entity';
import { Channels } from '../entities/Channels.entity';
import { DMs } from '../entities/DMs.entity';
import { Mentions } from '../entities/Mentions.entity';
import { Users } from '../entities/Users.entity';
import { WorkspaceMembers } from '../entities/WorkspaceMembers.entity';
import { Workspaces } from '../entities/Workspaces.entity';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '192.168.0.117',
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    ChannelChats,
    ChannelMembers,
    Channels,
    DMs,
    Mentions,
    Users,
    WorkspaceMembers,
    Workspaces,
  ],
  charset: 'utf8mb4',
  synchronize: false,
  logging: true,
};

export = config;
