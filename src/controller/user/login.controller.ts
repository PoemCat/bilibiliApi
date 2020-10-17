import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { LoginService } from 'src/service/user/login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  getLoginUrl() {
    return this.loginService.getLoginUrl();
  }

  @Get('qrcode')
  async getLoginQRCode(@Res() response: Response, @Query('oauthKey') oauthKey: string) {
    response.setHeader('Content-Type', 'image/webp');
    response.send(await this.loginService.getLoginQRCode(oauthKey))
  }


  @Get('login_status')
  async getUserLoginStatus(@Query('oauthKey') oauthKey: string) {
    return this.loginService.getUserLoginStatus(oauthKey);
  }
}
