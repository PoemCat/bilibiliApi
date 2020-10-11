import { HttpModule, Module } from '@nestjs/common';
import { LoginController } from 'src/controller/user/login.controller';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';

const ControllerModules = [AppController, LoginController]
@Module({
  imports: [HttpModule],
  controllers: ControllerModules,
  providers: [AppService],
})
export class AppModule {}
