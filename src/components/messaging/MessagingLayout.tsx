import { ReactNode } from 'react';
import { MessageSquare, Search, Settings } from 'lucide-react';

interface MessagingLayoutProps {
  children: ReactNode;
}

export default function MessagingLayout({ children }: MessagingLayoutProps) {
  return (
    <div className="flex h-[calc(100vh-4rem)] bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
      {/* Sidebar */}
      <div className="w-80 border-r border-white/10 flex flex-col">
        {/* Search Bar */}
        <div className="p-4 border-b border-white/10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          {/* Conversation items will go here */}
        </div>

        {/* Settings Button */}
        <div className="p-4 border-t border-white/10">
          <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
} 