import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user && user?.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, username, ...result } = user;
      return result;
    }
  }
}
