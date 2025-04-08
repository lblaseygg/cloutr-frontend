import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface DropdownProps {
  trigger: React.ReactNode;
  items: {
    label: string;
    value: string;
    icon?: React.ReactNode;
  }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function Dropdown({ trigger, items, value, onChange, className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1" role="menu">
            {items.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onChange(item.value);
                  setIsOpen(false);
                }}
                className={cn(
                  'w-full text-left px-4 py-2 text-sm flex items-center gap-2',
                  value === item.value
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-50'
                )}
                role="menuitem"
              >
                {item.icon && <span className="w-4 h-4">{item.icon}</span>}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 