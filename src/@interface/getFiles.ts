export interface IgetFiles {
  message: string;
  errCode?: number | Error;
  data: {
    status: string;
    buffer: Buffer | any;
  };
}
