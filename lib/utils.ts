import { parseEther, formatEther } from 'viem';

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatTipAmount(amount: string): string {
  try {
    const parsed = parseEther(amount);
    return formatEther(parsed);
  } catch {
    return amount;
  }
}

export function calculatePlatformFee(amount: string, feePercentage: number): string {
  try {
    const amountWei = parseEther(amount);
    const feeWei = (amountWei * BigInt(feePercentage)) / BigInt(100);
    return formatEther(feeWei);
  } catch {
    return '0';
  }
}

export function formatUsdValue(ethAmount: string, ethPrice: number = 2500): string {
  try {
    const eth = parseFloat(ethAmount);
    const usd = eth * ethPrice;
    return `~$${usd.toFixed(2)}`;
  } catch {
    return '~$0.00';
  }
}

export function generateTipId(): string {
  return `tip_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
