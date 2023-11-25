import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Alex' })
  username: string;

  @ApiProperty({ example: 'alex123' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'Alex',
        password: 'alex123',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    password: string;
  };

  @ApiProperty({ example: 'Logged in' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'session has ended' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'Alex' })
  username: string;

  @ApiProperty({ example: 'alex123@gmail.com' })
  email: string;
}

export class SignupResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Alex' })
  username: string;

  @ApiProperty({ example: 'jgfgjhg' })
  password: string;

  @ApiProperty({ example: 'alex123@gmail.com' })
  email: string;

  @ApiProperty({ example: '545454554' })
  updatedAt: string;

  @ApiProperty({ example: '21535535' })
  createdAt: string;
}
