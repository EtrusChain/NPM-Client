import { sendFiles } from './ftp/sendFiles';
import { IsendFile } from './@interface/sendFiles';
import { getFiles } from './ftp/getFiles';
import { IgetFiles } from './@interface/getFiles';

export const Greeter = (name: string) => `Hello ${name}`;
export const AddFile = (fileBuffer: Buffer[], fileName: string): Promise<IsendFile> => sendFiles(fileBuffer, fileName);
export const GetFile = (fileHash: string, fileName: string): Promise<IgetFiles> => getFiles(fileHash, fileName);
