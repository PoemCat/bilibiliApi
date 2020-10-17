import { HttpService, Injectable } from '@nestjs/common';
import * as QRCodeUtil from 'qrcode';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type ILogin = {
  url: string;
  ouathKey: string;
};

// Bilibili返回数据接口
type IBilibili<T> = {
  code: number;
  status: boolean;
  ts: number;
  data: T;
};

@Injectable()
export class LoginService {
  constructor(private readonly httpService: HttpService) {}

  getLoginUrl(): Observable<ILogin> {
    return this.httpService
      .get<IBilibili<ILogin>>(
        'https://passport.bilibili.com/qrcode/getLoginUrl',
      )
      .pipe(map((_) => _.data.data));
  }

  getLoginQRCode(ouathKey: string): Promise<Buffer> {
    return QRCodeUtil.toBuffer(
      `https://passport.bilibili.com/qrcode/h5/login?oauthKey=${ouathKey}`,
    );
  }

  /**
   * 登录状态
   * @param oauthKey Bilibili登录标识
   */
  async getUserLoginStatus(oauthKey: string) {
    return this.httpService
      .get<IBilibili<any>>(
        `https://passport.bilibili.com/qrcode/getLoginInfo?oauthKey=${oauthKey}`,
      )
      .pipe(map((_) => _.data.data));
  }
}
