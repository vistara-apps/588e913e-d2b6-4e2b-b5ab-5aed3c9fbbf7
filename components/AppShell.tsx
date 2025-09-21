'use client';

import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

interface AppShellProps {
  children: React.ReactNode;
  showBackButton?: boolean;
  onBack?: () => void;
}

export function AppShell({ 
  children, 
  showBackButton = true, 
  onBack 
}: AppShellProps) {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      // Default back behavior for MiniApp
      window.history.back();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gray-400 bg-opacity-50 px-4 py-3 flex items-center">
        {showBackButton && (
          <button
            onClick={handleBack}
            className="p-2 -ml-2 text-foreground hover:bg-gray-200 rounded-lg transition-colors duration-200"
            aria-label="Go back"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-lg mx-auto px-4">
          {children}
        </div>
      </main>
    </div>
  );
}
