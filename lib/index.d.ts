import { IsendFile } from './@interface/sendFiles';
import { IgetFiles } from './@interface/getFiles';
export declare const Greeter: (name: string) => string;
export declare const AddFile: (fileName: string) => Promise<IsendFile>;
export declare const GetFile: (fileHash: string, fileName: string) => Promise<IgetFiles>;
