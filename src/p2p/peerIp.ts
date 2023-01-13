import { networkInterfaces, type } from 'os';

interface Iresults {
  wlp8s0: any;
}

interface IuserIp {
  peerHostUrl: string;
  peerUserIp: string;
}

export async function userIp(): Promise<IuserIp> {
  const nets: any = networkInterfaces();
  const results: Iresults | any = Object.create(null);

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
      const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4;
      if (net.family === familyV4Value && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
  }

  let hostUrl: string = '';
  let userIpName: string = '';
  const port = 9001;

  if (type() === 'Windows_NT') {
    hostUrl = `ftp://${results['VirtualBox Host-Only Network'][0]}:` + port;
    userIpName = results['VirtualBox Host-Only Network'][0];
  } else if (type() === 'Linux') {
    hostUrl = `ftp://${results.wlp8s0[0]}:` + port;
    userIpName = results.wlp8s0[0];
  }

  return {
    peerHostUrl: hostUrl,
    peerUserIp: userIpName,
  };
}
