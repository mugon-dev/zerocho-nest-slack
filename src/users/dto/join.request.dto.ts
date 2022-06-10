import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'zerocho@gmail.com',
    description: '이메일',
    required: true,
  })
  public email: string;
  @ApiProperty({
    example: '제로초',
    description: '닉네임',
    required: true,
  })
  public nickname: string;
  @ApiProperty({
    example: 'nodejsbook',
    description: '비밀번호',
    required: true,
  })
  public password: string;
}
