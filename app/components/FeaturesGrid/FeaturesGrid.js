import { defaultModifiers } from '@popperjs/core/lib/popper-lite';
import React from 'react';

import FeatureDetail from '../FeatureDetail/FeatureDetail';

import './FeaturesGrid.scss';

const FeaturesGrid = (props)=>{

    // Create useHover hook!!

    const features = [{
        title:"Smart Wallet built for a Multi-Chain World",
        description:"The Sequence Wallet empowers your users with a friendly and secure experience for all of Ethereum. Plus, you'll never get stuck: you and your users can easily move between chains to capitalize on the lowest gas fees and highest security."
    },{
        title:"Web & Backend SDKs",
        description:"Powerful developer libraries and APIs that seamlessly integrate with Ethereum."
    },{
        title:"Audited Smart Contract Library",
        description:"A standard library of audited smart contracts. Check out our Github.",
    },{
        title:"Enhanced Transactions",
        description:"Meta transaction support means users can batch transactions and pay for gas in the token of their choice. And, Sequence Meta transactions work with all existing contracts (without any changes required to your contracts)."
    },{
        title:"Social / Email Login & Recovery for Wallets",
        description:"Easily sign in via Google, Facebook or other socials. No blockchain knowledge required."
    },{
        title:"Niftyswap (NFT) Market Protocol",
        description:"Offer your users an ecommerce-like market experience for trading ERC-1155 tokens. Users will love instant liquidity with Niftyswap's AMM design! Build your own custom UI's — we've already built the backend for you."
    },{
        title:"Easy Minting, Transfer and Exchange of NFTs and Digital Items",
        description:"Our widely-adopted ERC-1155 smart contracts help you easily create digital collectibles. Plus, enhance your capabilities with our NFT APIs for querying metadata and balances."
    },{
        title:"Friendly Payments",
        description:"Easy credit card on-ramps, and your users don’t need to own crypto to pay fees."
    }];


    return (
        <div className="full-width-grid">
            <div className="grid-container">
                {
                    features.map((feature,index) => (
                        <FeatureDetail 
                            key={index} 
                            feature={feature}
                            index={index}
                        />
                    ))
                }
            </div>
        </div>
    );
}


export default FeaturesGrid;
