import { Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { LoginService } from 'src/service/user/login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  getLoginUrl() {
    return this.loginService.getLoginUrl();
  }

  /**
   * 登录二维码，不推荐使用，可以根据oauthKey直接生成二维码
   * @deprecated
   * @param response 
   * @param oauthKey 
   */
  @Get('qrcode')
  async getLoginQRCode(@Res() response: Response, @Query('oauthKey') oauthKey: string) {
    response.setHeader('Content-Type', 'image/webp');
    response.send(await this.loginService.getLoginQRCode(oauthKey))
  }


  /**
   * 根据oauthKey查询当前登录状态
   * @param oauthKey 
   */
  @Post('status')
  async getUserLoginStatus(@Query('oauthKey') oauthKey: string) {
    return this.loginService.getUserLoginStatus(oauthKey);
  }
}
