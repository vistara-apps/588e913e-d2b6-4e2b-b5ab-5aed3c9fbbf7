# TipSpark - Base MiniApp

Spark engagement by tipping directly on your favorite content.

## Overview

TipSpark is a Base MiniApp that enables users to send small monetary tips for specific interactions, primarily focused on 'likes' within a social context. Built with Next.js 15, MiniKit, and OnchainKit.

## Features

- **Direct Tipping**: Send instant ETH tips on Base network
- **Engagement-to-Value Conversion**: Transform likes into monetary rewards
- **Creator Monetization**: Simple way for creators to receive tips
- **In-Frame Tipping**: Seamless integration with Farcaster frames

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- MiniKit (Coinbase)
- OnchainKit (Coinbase)
- Base Network

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Your OnchainKit API key
- `NEXT_PUBLIC_CHAIN_ID`: Base network chain ID (8453)
- `NEXT_PUBLIC_RPC_URL`: Base network RPC URL

## Architecture

### Core Components

- **TipInterface**: Main tipping interface with amount selection
- **TipButton**: Interactive button with processing states
- **ConfirmationModal**: Transaction confirmation dialog
- **CreatorProfile**: Display creator information
- **BalanceDisplay**: Show user's ETH balance

### Data Models

- **User**: FID and wallet address
- **Tip**: Transaction details and metadata
- **FrameInteraction**: Social interaction tracking

## Deployment

The app is optimized for deployment on Vercel or similar platforms that support Next.js 15.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details
