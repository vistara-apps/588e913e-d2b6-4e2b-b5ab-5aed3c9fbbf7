import { TipConfig } from './types';

export const TIP_AMOUNTS: TipConfig[] = [
  {
    amount: '0.001',
    label: '0.001 ETH',
    usdValue: '~$2.50'
  },
  {
    amount: '0.005',
    label: '0.005 ETH',
    usdValue: '~$12.50'
  },
  {
    amount: '0.01',
    label: '0.01 ETH',
    usdValue: '~$25.00'
  }
];

export const PLATFORM_FEE_PERCENTAGE = 5;

export const MOCK_CREATOR = {
  fid: '12345',
  displayName: 'The creator',
  username: 'creator',
  avatar: '/api/placeholder/40/40',
  likes: 1
};
