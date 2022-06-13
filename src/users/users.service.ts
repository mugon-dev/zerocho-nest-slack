import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { Users } from '../entities/Users.entity';
import { WorkspaceMembers } from '../entities/WorkspaceMembers.entity';
import { ChannelMembers } from '../entities/ChannelMembers.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    @InjectRepository(WorkspaceMembers)
    private workspaceMembersRepository: Repository<WorkspaceMembers>,
    @InjectRepository(ChannelMembers)
    private channelMembersRepository: Repository<ChannelMembers>,
  ) {}

  async getUser(email: string) {
    const user = await this.usersRepository.findOne({ where: { email } });
  }

  async join(email: string, nickname: string, password: string) {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      // 이미 존재하는 유저라고 에러
      throw new UnauthorizedException('이미 존재하는 사용자입니다.');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const returned = await this.usersRepository.save({
      email,
      nickname,
      password: hashedPassword,
    });
    await this.workspaceMembersRepository.save({
      UserId: returned.id,
      WorkspaceId: 1,
    });
    await this.channelMembersRepository.save({
      UserId: returned.id,
      ChannelId: 1,
    });
  }
}
