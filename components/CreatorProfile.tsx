'use client';

import { cn } from '../lib/utils';

interface Creator {
  fid: string;
  displayName: string;
  username: string;
  avatar: string;
  likes: number;
}

interface CreatorProfileProps {
  creator: Creator;
  className?: string;
}

export function CreatorProfile({ creator, className }: CreatorProfileProps) {
  return (
    <div className={cn('flex items-center justify-between p-4 bg-gray-500 bg-opacity-20 rounded-lg', className)}>
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-sm">
            {creator.displayName.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <p className="font-medium text-foreground text-sm">{creator.displayName}</p>
          <p className="text-muted-foreground text-xs">@{creator.username}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="bg-white rounded-full px-3 py-1 flex items-center space-x-1">
          <span className="text-sm">❤️</span>
          <span className="text-sm font-medium">{creator.likes}</span>
        </div>
      </div>
    </div>
  );
}
