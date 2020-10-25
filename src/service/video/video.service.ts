import { HttpModule, Injectable } from "@nestjs/common";

@Injectable()
export class VideoService {

    constructor(private readonly httpClient: HttpModule) {}

    getVideoByID(id: string) {
        return ''
    }

    getTestVideo() {
        return ''
    }
}