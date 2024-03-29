import { removeDuplicates } from '../utils/removeDuplicates';
import { getPeers, IgetPeers } from '../p2p/getPeers';
import { sendFilesBuffer } from './ftpSendBuffer';
import { readFiles } from './readFile';
import { IsendFile } from '../@interface/sendFiles';
import { IReadFiles } from '../@interface/readFiles';

export async function sendFiles(fileBuffer: any[], fileName: string): Promise<IsendFile> {
  const readFile: Promise<IReadFiles> = readFiles(fileBuffer, `${fileName}`);

  const fileArray: any[] = [
    (await readFile).peerOne,
    (await readFile).peerTwo,
    (await readFile).peerThree,
    (await readFile).peerFour,
    (await readFile).peerFive,
    (await readFile).peerSix,
  ];

  const getPeersData: Promise<IgetPeers> = getPeers();

  const peersUserId: string[] = (await getPeersData).userIpData;
  const peersUserName: string[] = (await getPeersData).hostNameData;

  // This code will be update in the feature for sending files under the 6 peers
  const perr: any = peersUserId.slice(0, 6);
  const perrName: any = peersUserName.slice(0, 6);

  removeDuplicates(perr);
  removeDuplicates(perrName);

  for (let index = 0; index < 6; index++) {
    let userIp = perr[index];
    let hostName = perrName[index];
    const fileArrayElement = fileArray[index];

    if (typeof userIp === 'undefined') {
      userIp = perr[0];
      hostName = perrName[0];
    }

    // createFile(element, ((await readFile) as any).peer + fileArrayElement);
    sendFilesBuffer((await readFile).peerFile.fileHash + `-${index}`, fileArrayElement, hostName, userIp);
  }

  return {
    message: 'File Sended Succesfully',
    data: {
      fileName: (await readFile).peerFile.fileName,
      fileHash: (await readFile).peerFile.fileHash,
      peers: perr,
    },
  };
}
