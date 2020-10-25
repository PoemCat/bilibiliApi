import { Observable } from "rxjs";

const FileRecordType: Record<string, string> = {
  png: 'image/png',
  jpg: 'image/jpg',
  mp3: '',
};

export function getMediaContentType(fileType: string) {
  const type = FileRecordType[fileType];
  if (!type) {
    throw new Error('Not found type.');
  }
  return type;
}

export function defValueWrapper<T>(record: Record<string, T>, val: T) {
  return (key: string) => record[key] || val;
}

// 将Observale转换为Promise
export function toPromise<T extends any>(obs: Observable<T>): Promise<T> {
  return obs.toPromise();
}