export interface User {
  fid: string;
  walletAddress: string;
}

export interface Tip {
  tipId: string;
  senderFid: string;
  receiverFid: string;
  amount: string;
  currency: 'ETH';
  timestamp: number;
  frameId?: string;
  actionType: 'like' | 'boost' | 'direct';
}

export interface FrameInteraction {
  interactionId: string;
  frameId: string;
  fid: string;
  actionType: 'tip' | 'like' | 'boost';
  timestamp: number;
}

export interface TipButtonState {
  idle: 'idle';
  processing: 'processing';
  success: 'success';
  error: 'error';
}

export type TipAmount = '0.001' | '0.005' | '0.01';

export interface TipConfig {
  amount: TipAmount;
  label: string;
  usdValue: string;
}
