import { exception } from "console";

const FileRecordType: Record<string, string> = {
    png: 'image/png',
    jpg: 'image/jpg',
    mp3: ''
}
export function getMediaContentType(fileType: string) {
    const type = FileRecordType[fileType];
    if (!type) {
        throw new Error('Not found type.');
    }
    return type;
}