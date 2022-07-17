import useSWR from 'swr';
import { useRecoilValue } from 'recoil';

import IConversation from '../models/conversation.model';
import { currentConversationIdState, userState } from '../store/atoms';

export const getConversation = () => {
  const userId = useRecoilValue(userState);
  const conversationId = useRecoilValue(currentConversationIdState);

  const { data, error, mutate } = useSWR<IConversation>([
    `/conversation/${conversationId}/messages`,
    userId,
  ]);

  const conversation = data;
  const isLoading = !data;
  const setConversation = mutate;

  return {
    conversation,
    setConversation,
    error,
    isLoading,
  };
};

export const getRecents = () => {
  const userId = useRecoilValue(userState);
  const { data, error } = useSWR<IConversation[]>([
    `conversation/recent`,
    userId,
  ]);

  const recents = data || [];
  const isLoading = !data;

  return {
    recents,
    error,
    isLoading,
  };
};
