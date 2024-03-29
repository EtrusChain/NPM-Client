import { createReadStream, readFileSync } from 'fs';
import { join, basename } from 'path';
import { createHash } from 'crypto';
import { IReadFiles } from '../@interface/readFiles';

export async function readFiles(fileBuffer: any[], fileNameArg: string): Promise<IReadFiles> {
  const fileName = basename(fileNameArg);

  function mySplit(a: any[], delimiter: number): any[][] {
    const result = [];
    let currentToken = [];
    for (const iterator of a) {
      if (iterator === delimiter) {
        if (currentToken.length !== 0) result.push(currentToken);
        currentToken = [];
      } else {
        currentToken.push(iterator);
      }
    }

    if (currentToken.length !== 0) result.push(currentToken);

    return result;
  }

  const fileData: number[] = mySplit(fileBuffer, -1)[0];
  let fileDataLenght1 = Math.trunc(fileData.length / 6);

  let fileDataLenght2 = Math.trunc(fileData.length / 6) + Math.trunc(fileDataLenght1);

  let fileDataLenght3 = Math.trunc(fileData.length / 6) + Math.trunc(fileDataLenght2);

  let fileDataLenght4 = Math.trunc(fileData.length / 6) + Math.trunc(fileDataLenght3);

  let fileDataLenght5 = Math.trunc(fileData.length / 6) + Math.trunc(fileDataLenght4);

  const fileDataLenght6 = fileData.length;

  // User Ip Array
  // const peersIpArray: string = (await userIp()).peerHostUrl;

  // User Ip commnet
  const peersLenghtArray: number[] = [
    0,
    fileDataLenght1,
    fileDataLenght2,
    fileDataLenght3,
    fileDataLenght4,
    fileDataLenght5,
    fileDataLenght6,
  ];

  // Hash will be upadte for create with file buffer
  const fileHash = createHash('sha256').update(fileNameArg).digest('hex') as string;

  const peersObject: IReadFiles = {
    peerOne: fileData.slice(0, fileDataLenght1),
    peerTwo: fileData.slice(++fileDataLenght1, fileDataLenght2),
    peerThree: fileData.slice(++fileDataLenght2, fileDataLenght3),
    peerFour: fileData.slice(++fileDataLenght3, fileDataLenght4),
    peerFive: fileData.slice(++fileDataLenght4, fileDataLenght5),
    peerSix: fileData.slice(++fileDataLenght5, fileDataLenght6),
    peerFile: {
      fileName: `${fileName}`,
      fileHash: 'Ec' + fileHash,
    },
  };

  return peersObject;
}
