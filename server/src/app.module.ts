import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogController } from './blog/controller/blog.controller';
import { BlogService } from './blog/service/blog.service';
import { BlogModule } from './blog/blog.module';
import { UserService } from './user/service/user.service';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/service/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BlogModule, UserModule, AuthModule],
  controllers: [AppController, BlogController],
  providers: [AppService, BlogService, UserService, AuthService],
})
export class AppModule {}
