'use client';

import { TipAmount } from '../lib/types';
import { TIP_AMOUNTS } from '../lib/constants';
import { cn } from '../lib/utils';

interface TipAmountSelectorProps {
  selectedAmount: TipAmount;
  onAmountChange: (amount: TipAmount) => void;
  className?: string;
}

export function TipAmountSelector({
  selectedAmount,
  onAmountChange,
  className
}: TipAmountSelectorProps) {
  return (
    <div className={cn('space-y-3', className)}>
      <p className="text-sm text-muted-foreground font-medium">Select tip amount:</p>
      <div className="flex gap-3 justify-center">
        {TIP_AMOUNTS.map((config) => (
          <button
            key={config.amount}
            onClick={() => onAmountChange(config.amount)}
            className={cn(
              'px-4 py-2 rounded-lg border-2 transition-all duration-200 text-sm font-medium',
              selectedAmount === config.amount
                ? 'border-primary bg-primary text-white'
                : 'border-gray-200 bg-surface text-foreground hover:border-primary hover:bg-primary hover:bg-opacity-10'
            )}
          >
            <div>{config.label}</div>
            <div className="text-xs opacity-75">{config.usdValue}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
