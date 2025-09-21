'use client';

import { TipAmount } from '../lib/types';
import { cn } from '../lib/utils';
import { CheckIcon } from './icons/CheckIcon';
import { SpinnerIcon } from './icons/SpinnerIcon';

interface TipButtonProps {
  amount: TipAmount;
  onClick: () => void;
  isProcessing?: boolean;
  isSuccess?: boolean;
  disabled?: boolean;
  className?: string;
}

export function TipButton({
  amount,
  onClick,
  isProcessing = false,
  isSuccess = false,
  disabled = false,
  className
}: TipButtonProps) {
  const getButtonContent = () => {
    if (isSuccess) {
      return (
        <>
          <CheckIcon className="w-5 h-5 mr-2" />
          Tip Sent!
        </>
      );
    }
    
    if (isProcessing) {
      return (
        <>
          <SpinnerIcon className="w-5 h-5 mr-2" />
          Processing...
        </>
      );
    }
    
    return 'Tip now';
  };

  const getButtonStyles = () => {
    if (isSuccess) {
      return 'bg-green-500 hover:bg-green-600';
    }
    
    if (isProcessing) {
      return 'bg-gray-400 cursor-not-allowed';
    }
    
    return 'bg-red-400 hover:bg-red-500';
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || isProcessing}
      className={cn(
        'px-8 py-3 rounded-full text-white font-medium transition-all duration-200 active:scale-95 flex items-center justify-center min-w-[120px]',
        getButtonStyles(),
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {getButtonContent()}
    </button>
  );
}
