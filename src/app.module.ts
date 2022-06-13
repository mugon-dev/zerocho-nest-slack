import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UsersModule } from './users/users.module';
import { ChannelsModule } from './channels/channels.module';
import { DmsModule } from './dms/dms.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './configs/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { Users } from './entities/Users.entity';
import { Workspaces } from './entities/Workspaces.entity';
import { WorkspaceMembers } from './entities/WorkspaceMembers.entity';
import { ChannelMembers } from './entities/ChannelMembers.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([
      Users,
      Workspaces,
      WorkspaceMembers,
      ChannelMembers,
    ]),
    AuthModule,
    UsersModule,
    ChannelsModule,
    DmsModule,
    WorkspacesModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    // forRoutes(주소) or forRoutes(컨트롤러)에 특정 미들웨어 적용
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
