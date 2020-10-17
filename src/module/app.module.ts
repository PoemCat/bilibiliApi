import { HttpModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { LoginController } from 'src/controller/user/login.controller';
import { LoginService } from 'src/service/user/login.service';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { AuthMiddleware } from '../middlewares/auth.middleware';
const ControllerModules = [AppController, LoginController];
@Module({
  imports: [HttpModule],
  controllers: ControllerModules,
  providers: [AppService, LoginService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
