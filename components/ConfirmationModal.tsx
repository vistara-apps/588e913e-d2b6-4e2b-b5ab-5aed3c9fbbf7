'use client';

import { TipAmount } from '../lib/types';
import { TIP_AMOUNTS } from '../lib/constants';
import { cn } from '../lib/utils';

interface Creator {
  displayName: string;
  username: string;
}

interface ConfirmationModalProps {
  amount: TipAmount;
  recipient: Creator;
  onConfirm: () => void;
  onCancel: () => void;
  className?: string;
}

export function ConfirmationModal({
  amount,
  recipient,
  onConfirm,
  onCancel,
  className
}: ConfirmationModalProps) {
  const tipConfig = TIP_AMOUNTS.find(config => config.amount === amount);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={cn('bg-surface rounded-lg p-6 w-full max-w-sm space-y-4', className)}>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Confirm Tip
          </h3>
          <p className="text-text-secondary text-sm">
            Send {tipConfig?.label} ({tipConfig?.usdValue}) to {recipient.displayName}?
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Amount:</span>
            <span className="font-medium text-text-primary">{tipConfig?.label}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">USD Value:</span>
            <span className="font-medium text-text-primary">{tipConfig?.usdValue}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Platform Fee (5%):</span>
            <span className="font-medium text-text-primary">~$0.13</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-sm font-semibold">
            <span className="text-text-primary">Total:</span>
            <span className="text-text-primary">{tipConfig?.usdValue}</span>
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 border border-gray-300 text-text-primary rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors duration-200"
          >
            Confirm Tip
          </button>
        </div>
      </div>
    </div>
  );
}
