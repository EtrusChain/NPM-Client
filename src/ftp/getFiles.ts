import { readFileSync } from 'fs';
import { getPeers } from '../p2p/getPeers';
import * as ftpClient from 'basic-ftp';
import { removeDuplicates } from '../utils/removeDuplicates';
import { IgetFiles } from '../@interface/getFiles';

export async function getFiles(fileHash: string, fileName: string): Promise<IgetFiles> {
  const fileData: any = [];
  const userIp = (await getPeers()).userIpData;
  const userHostName = (await getPeers()).hostNameData;

  removeDuplicates(userIp);
  removeDuplicates(userHostName);

  for (let index = 0; index < userIp.length; index++) {
    const userIpIndex = userIp[index];
    const hostNameIndex = userHostName[index];

    const client = new ftpClient.Client();

    client.ftp.verbose = true;

    await client
      .access({
        host: userIpIndex,
        port: Number(process.env.PORT),
        user: hostNameIndex,
        password: `${process.env.PASSWORD}`,
        secure: false,
      })
      .catch((err: ftpClient.FTPResponse | Error | any) => {
        if (err.code === 'ECONNREFUSED') {
          // process.exit(1);
        }
      });
  }

  for (let index: number = 0; index < 6; index++) {
    const userFileData: any = readFileSync(__dirname + `/files/${fileHash}-${index}`);

    fileData.push(userFileData);
  }

  const fileBuffer = Buffer.concat(fileData);

  const fs = require('fs');
  const data = Buffer.from(fileBuffer);
  fs.writeFile(`${__dirname}/download/${fileName}`, data, 'binary');

  return {
    message: 'File Sended',
    data: {
      status: 'Succesfully',
      buffer: fileBuffer,
    },
  };
}

// getFiles('Ec3fe4c1dda5aa86b1abecb8d4478c1057bd69d43b82086ff995aae1149cff6927', 'Hands-on-blockchain.pdf');
