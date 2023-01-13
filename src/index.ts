import { sendFiles } from './ftp/sendFiles';
import { IsendFile } from './@interface/sendFiles';
import { getFiles } from './ftp/getFiles';
import { IgetFiles } from './@interface/getFiles';

export const AddFile = (fileName: string): Promise<IsendFile> => sendFiles(fileName);
export const GetFile = (fileHash: string, fileName: string): Promise<IgetFiles> => getFiles(fileHash, fileName);
