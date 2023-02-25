import { CollectionReference } from "firebase/firestore";

export type UserModel = {
  id?: string;
  firstName: string;
  lastName: string;
  username: string;
  email?: string;
  countryCode: string;
  phoneNumber: string;
  discriminator: number;
  avatar: string;
  password?: string;
  messagesSent: CollectionReference[];
  chatRooms: CollectionReference[];
  friends: CollectionReference[];
};
export type chatRoomModel = {
    id: string;
    members: CollectionReference[]
}
export type messageModel = {};
export type fileModel = {};
export type emojiModel = {};
export type animatedEmojiModel = {};
