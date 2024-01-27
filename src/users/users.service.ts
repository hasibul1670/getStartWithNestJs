import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from './users.interface';

@Injectable()
export class UsersService {
  private readonly users: Users[] = [
    {
      id: 4,
      name: 'hasib',
      class: 'five',
    },
    {
      id: 1,
      name: 'rifat',
      class: 'four',
    },
  ];

  findAllUsers() {
    return this.users;
  }

  findSingleUser(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }
  updateSingleUser(id: number, updatedUser: Partial<Users>): Users | undefined {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
      return this.users[userIndex];
    }
    throw new NotFoundException('User Not Found');
  }
  deleteSingleUser(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  createUser(users: Users) {
    const res = this.users.push(users);
    return res;
  }
}
