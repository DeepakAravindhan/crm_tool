import { create } from 'zustand';

type Message = {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  isWidget?: boolean;
  widgetData?: any;
};

interface ChatState {
  isOpen: boolean;
  messages: Message[];
  toggleChat: () => void;
  addMessage: (msg: Omit<Message, 'id'>) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  isOpen: false,
  messages: [
    { id: '1', sender: 'ai', text: 'Hello! I am your Graphory Solution AI Assistant. How can I help you today?' }
  ],
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  addMessage: (msg) => set((state) => ({
    messages: [...state.messages, { ...msg, id: Date.now().toString() }]
  }))
}));
