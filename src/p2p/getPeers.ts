import { config } from 'dotenv';
import { connect, model, Schema } from 'mongoose';

export interface IgetPeers {
  message: string;
  error?: Error | string | boolean;
  userIpData: string[];
  hostNameData: string[];
}

config();
// 4. Connect to MongoDB
async function dataBase() {
  await connect(`${process.env.MONGODB}`);
}

dataBase();

interface IUser {
  hostName: string;
  userIp: string;
  userId: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  hostName: { type: String, required: true },
  userIp: { type: String, required: true },
  userId: { type: String, required: true },
});

// 3. Create a Model.
export const User = model<IUser>('User', userSchema);

// This Function will be update in the feature for sending files under the 6 peers
export async function getPeers(): Promise<IgetPeers> {
  const user: any = await User.find({});

  const userArray: string[] = [];
  const usersHostName: string[] = [];

  for (const iterator of user) {
    userArray.push(iterator.userIp);
    usersHostName.push(iterator.hostName);
  }

  return {
    message: 'Peers Finded',
    userIpData: userArray,
    hostNameData: usersHostName,
  };
}
