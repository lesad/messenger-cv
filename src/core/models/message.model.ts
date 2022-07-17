export default interface IMessage {
  id: number,
  senderId: number,
  sendDate: string,
  message: string,
  isEdited: boolean,
  isHidden: boolean,
  conversationId: number
}
