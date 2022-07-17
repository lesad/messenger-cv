import { atom } from 'recoil';
import IConversation from '../models/conversation.model';

export const conversationState = atom<IConversation>({
  key: 'conversation',
  default: {
    name: '',
    id: 6, // hardcoded
    creatorId: 0,
    createdDate: '',
    updatedDate: '',
    messages: [],
  },
});

export const recentState = atom<IConversation[]>({
  key: 'recent',
  default: [],
});

export const userState = atom<number>({
  key: 'user',
  default: 1, // hardcoded
});

export const currentConversationIdState = atom<number>({
  key: 'conversationId',
  default: 6, // hardcoded
});

export const darkModeState = atom<boolean>({
  key: 'darkMode',
  default: false,
});
