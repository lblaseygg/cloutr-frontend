import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between h-16">
            <div className="flex items-center pl-2">
              <Link href="/" className="text-2xl font-bold text-white">
                Cloutr
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8 px-4">
              <Link 
                href="/" 
                className={`text-sm font-medium px-2 py-1 transition-colors duration-200 ${
                  pathname === '/' 
                    ? 'text-white border-b-2 border-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/discover" 
                className={`text-sm font-medium px-2 py-1 transition-colors duration-200 ${
                  isActive('/discover') 
                    ? 'text-white border-b-2 border-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Discover
              </Link>
              <Link 
                href="/profile" 
                className={`text-sm font-medium px-2 py-1 transition-colors duration-200 ${
                  isActive('/profile') 
                    ? 'text-white border-b-2 border-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Profile
              </Link>
              <Link
                href="/auth/login"
                className={`text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200 ${
                  isActive('/auth/login') 
                    ? 'text-white bg-white/10' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Sign in
              </Link>
              <Link href="/auth/register">
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-2 text-sm font-medium transition-colors duration-200">
                  Get Started
                </Button>
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/10">
              <Link 
                href="/" 
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  pathname === '/' 
                    ? 'text-white bg-white/10' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/discover" 
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/discover') 
                    ? 'text-white bg-white/10' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Discover
              </Link>
              <Link 
                href="/profile" 
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/profile') 
                    ? 'text-white bg-white/10' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Profile
              </Link>
              <div className="pt-4 mt-4 border-t border-white/10">
                <Link
                  href="/auth/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors duration-200"
                >
                  Sign in
                </Link>
                <Link
                  href="/auth/register"
                  className="block px-3 py-2 mt-2 rounded-md text-base font-medium text-white bg-white/10 hover:bg-white/20 transition-colors duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
} 