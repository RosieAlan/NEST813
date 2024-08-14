import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { Permission } from './entities/permission.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([User,Role,Permission])
    //使用 @InjectRepository(User) 来注入一个 Repository<User> 实例，进而操作 User 表。
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
