import { useRecoilValue } from 'recoil';
import { userState, currentConversationIdState } from '../store/atoms';
import { getConversation } from './swr';

export default function submitMessage(
  message: string,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
) {
  const userId = useRecoilValue(userState);
  const conversationId = useRecoilValue(currentConversationIdState);
  const { setConversation } = getConversation();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setMessage('');
    if (!message) return;

    (async () => {
      const url = `http://localhost:${process.env.PORT}/conversation/${conversationId}/message`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-User': userId.toString(),
        },
        body: JSON.stringify({ text: message }),
      });
      const conversation = await response.json();
      setConversation(conversation);
    })();
  };

  return handleSubmit;
}
