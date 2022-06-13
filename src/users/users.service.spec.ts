import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Users } from '../entities/Users.entity';
import { WorkspaceMembers } from '../entities/WorkspaceMembers.entity';
import { ChannelMembers } from '../entities/ChannelMembers.entity';
import { DataSource } from 'typeorm';

class MockUserRepository {
  // private data
  #data = [{ id: 1, email: 'zerocho@gmail.com' }];

  findOne({ where: { email } }) {
    const data = this.#data.find((v) => v.email === email);
    if (data) {
      return data;
    }
    return null;
  }
}

class MockWorkspaceMembersRepository {}

class MockChannelMembersRepository {}

class MockDataSource {}

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(Users),
          useClass: MockUserRepository,
        },
        {
          provide: getRepositoryToken(WorkspaceMembers),
          useClass: MockWorkspaceMembersRepository,
        },
        {
          provide: getRepositoryToken(ChannelMembers),
          useClass: MockChannelMembersRepository,
        },
        {
          provide: DataSource,
          useClass: MockDataSource,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findbyEmail은 이메일을 통해 유저를 찾아야함', () => {
    expect(service.findByEmail('zerocho@gmail.com')).resolves.toStrictEqual({
      email: 'zerocho@gmail.com',
      id: 1,
    });
  });
  it('findbyEmail은 이메일을 통해 유저를 못찾으면 null을 반환', () => {
    expect(service.findByEmail('zeroch@gmail.com')).resolves.toStrictEqual(
      null,
    );
  });
});
