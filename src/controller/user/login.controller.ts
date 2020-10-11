import { Controller, Get, HttpService, Injectable } from '@nestjs/common';

type TLoginRes = {
  code: number;
  status: boolean;
  ts: number;
  data: {
    url: string;
    ouathKey: string;
  };
};

@Injectable()
@Controller('login')
export class LoginController {
  constructor(readonly httpService: HttpService) {}

  @Get('url')
  async getLoginUrl() {
    const { data } = await this.httpService
      .get<any>('https://passport.bilibili.com/qrcode/getLoginUrl')
      .toPromise();
    return data;
  }
}
