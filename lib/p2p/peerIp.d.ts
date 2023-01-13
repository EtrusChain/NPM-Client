interface IuserIp {
    peerHostUrl: string;
    peerUserIp: string;
}
export declare function userIp(): Promise<IuserIp>;
export {};
