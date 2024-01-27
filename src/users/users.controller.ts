import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Users } from './users.interface';
import { UsersService } from './users.service';

/* 
GET /users -> Fetch All Users 
GET /users/:id ->Fetch Single User
POST /users/create ->Create a  User 
PATCH /users/:id ->Update a  User
DELETE /users/:id ->Delete a  User
 */

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get()
  findAllUsers() {
    return this.UsersService.findAllUsers();
  }

  @Get(':id')
  findSingleUser(@Param('id') id: string) {
    return this.UsersService.findSingleUser(+id);
  }

  @Post('create')
  createUser(@Body() user: Users) {
    console.log(user);
    return this.UsersService.createUser(user);
  }

  @Patch(':id')
  updateSingleUser(@Param('id') id: string, @Body() userUpdate: {}) {
    return this.UsersService.updateSingleUser(+id, userUpdate);
  }

  @Delete(':id')
  deleteSingleUser(@Param('id') id: string) {
    return this.UsersService.deleteSingleUser(+id);
  }
}
