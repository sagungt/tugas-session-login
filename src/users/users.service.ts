import { Injectable } from '@nestjs/common';

export type User = {
  userId: number,
  username: string,
  password: string,
  pet: {
    name: string,
    picId: number,
  }
};

export type UserHttpPayload = Omit<User, 'password'>;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'Fulan',
        password: 'fulan123',
        pet: {
          name: 'alfred',
          picId: 1,
        }
      },
      {
        userId: 2,
        username: 'Fulanah',
        password: 'fulanah123',
        pet: {
          name: 'gopher',
          picId: 2
        },
      },
      {
        userId: 3,
        username: 'Jonhn Doe',
        password: 'john123',
        pet: {
          name: 'jenny',
          picId: 3
        },
      },
    ]
  }

  async findOne(username: string): Promise<User> {
    return this.users.find((user: User) => user.username === username);
  }
}
