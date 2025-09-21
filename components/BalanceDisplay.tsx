'use client';

import { useState, useEffect } from 'react';
import { WalletIcon } from './icons/WalletIcon';

interface BalanceDisplayProps {
  className?: string;
}

export function BalanceDisplay({ className }: BalanceDisplayProps) {
  const [balance, setBalance] = useState<string>('0.0');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching balance
    const fetchBalance = async () => {
      setIsLoading(true);
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setBalance('0.0234');
      setIsLoading(false);
    };

    fetchBalance();
  }, []);

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center space-x-2 ${className}`}>
        <div className="animate-pulse flex items-center space-x-2">
          <div className="w-5 h-5 bg-gray-200 rounded"></div>
          <div className="w-20 h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center space-x-2 text-text-secondary ${className}`}>
      <WalletIcon className="w-5 h-5" />
      <span className="text-sm font-medium">Balance: {balance} ETH</span>
    </div>
  );
}
