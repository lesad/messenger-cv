import IMessage from './message.model';

export default interface IConversation {
  id: number,
  name: string,
  creatorId: number,
  createdDate: string,
  updatedDate: string,
  messages: [IMessage] | []
}
