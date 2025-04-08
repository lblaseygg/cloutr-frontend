import { Send, Paperclip, Smile } from 'lucide-react';
import { useState } from 'react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'other';
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
}

interface ChatProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
  recipientName: string;
  recipientAvatar?: string;
}

export default function Chat({
  messages,
  onSendMessage,
  recipientName,
  recipientAvatar,
}: ChatProps) {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage.trim());
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="p-4 border-b border-white/10 flex items-center space-x-3">
        {recipientAvatar ? (
          <img
            src={recipientAvatar}
            alt={recipientName}
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
            <span className="text-white font-medium">
              {recipientName.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h2 className="text-white font-medium">{recipientName}</h2>
          <p className="text-sm text-gray-400">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender === 'user'
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/5 text-white'
              }`}
            >
              <p>{message.content}</p>
              <div className="flex items-center justify-end space-x-1 mt-1">
                <span className="text-xs opacity-70">{message.timestamp}</span>
                {message.sender === 'user' && (
                  <span className="text-xs opacity-70">
                    {message.status === 'read' && '✓✓'}
                    {message.status === 'delivered' && '✓✓'}
                    {message.status === 'sent' && '✓'}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <Paperclip className="h-5 w-5" />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="button"
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <Smile className="h-5 w-5" />
          </button>
          <button
            type="submit"
            className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
} 