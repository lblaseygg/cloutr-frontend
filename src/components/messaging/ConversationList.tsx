import { MessageSquare, CheckCircle2 } from 'lucide-react';

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  avatar?: string;
}

interface ConversationListProps {
  conversations: Conversation[];
  activeConversationId?: string;
  onSelectConversation: (id: string) => void;
}

export default function ConversationList({
  conversations,
  activeConversationId,
  onSelectConversation,
}: ConversationListProps) {
  return (
    <div className="space-y-1">
      {conversations.map((conversation) => (
        <button
          key={conversation.id}
          onClick={() => onSelectConversation(conversation.id)}
          className={`w-full flex items-center space-x-3 p-3 hover:bg-white/5 transition-colors ${
            activeConversationId === conversation.id ? 'bg-white/10' : ''
          }`}
        >
          {/* Avatar */}
          <div className="relative">
            {conversation.avatar ? (
              <img
                src={conversation.avatar}
                alt={conversation.name}
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                <span className="text-white font-medium">
                  {conversation.name.charAt(0)}
                </span>
              </div>
            )}
            {conversation.unread && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full border-2 border-gray-900" />
            )}
          </div>

          {/* Conversation Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-medium truncate">
                {conversation.name}
              </h3>
              <span className="text-xs text-gray-400">
                {conversation.timestamp}
              </span>
            </div>
            <p className="text-sm text-gray-400 truncate">
              {conversation.lastMessage}
            </p>
          </div>

          {/* Status Icon */}
          {!conversation.unread && (
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          )}
        </button>
      ))}
    </div>
  );
} 