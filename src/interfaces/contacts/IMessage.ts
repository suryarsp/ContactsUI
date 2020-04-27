import { MessageType } from './MessageType';

export interface IMessage {
  messageType: MessageType;
  message: string;
  date: Date | string;
  from ?: {
    id: string;
    name: string;
  };
  to ?: {
    id: string;
    name: string;
  };
}
