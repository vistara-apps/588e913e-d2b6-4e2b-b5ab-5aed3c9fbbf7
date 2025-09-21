'use client';

import { useState } from 'react';
import { TipButton } from './TipButton';
import { BalanceDisplay } from './BalanceDisplay';
import { ConfirmationModal } from './ConfirmationModal';
import { CreatorProfile } from './CreatorProfile';
import { TipAmountSelector } from './TipAmountSelector';
import { TipAmount } from '../lib/types';
import { MOCK_CREATOR } from '../lib/constants';

export function TipInterface() {
  const [selectedAmount, setSelectedAmount] = useState<TipAmount>('0.001');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [tipSuccess, setTipSuccess] = useState(false);

  const handleTipClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmTip = async () => {
    setIsProcessing(true);
    setShowConfirmation(false);
    
    try {
      // Simulate transaction processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      setTipSuccess(true);
      
      // Reset after showing success
      setTimeout(() => {
        setTipSuccess(false);
        setIsProcessing(false);
      }, 3000);
    } catch (error) {
      console.error('Tip failed:', error);
      setIsProcessing(false);
    }
  };

  const handleCancelTip = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="py-8 space-y-8">
      {/* Tip Circle with Gradient Ring */}
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="gradient-ring w-32 h-32">
            <div className="gradient-ring-inner flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl font-semibold text-text-primary">tip now</div>
                <div className="text-sm text-text-secondary">Like 1 likes</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-text-primary font-medium">
            Tip content creator <span className="font-semibold">$4.50</span> for
          </p>
          <p className="text-text-primary font-medium">
            multi <span className="italic">def</span> likes your posts.
          </p>
        </div>

        {/* Tip Amount Selector */}
        <TipAmountSelector
          selectedAmount={selectedAmount}
          onAmountChange={setSelectedAmount}
        />

        {/* Tip Button */}
        <TipButton
          amount={selectedAmount}
          onClick={handleTipClick}
          isProcessing={isProcessing}
          isSuccess={tipSuccess}
        />
      </div>

      {/* Creator Profile */}
      <CreatorProfile creator={MOCK_CREATOR} />

      {/* Balance Display */}
      <BalanceDisplay />

      {/* Confirmation Modal */}
      {showConfirmation && (
        <ConfirmationModal
          amount={selectedAmount}
          recipient={MOCK_CREATOR}
          onConfirm={handleConfirmTip}
          onCancel={handleCancelTip}
        />
      )}
    </div>
  );
}
