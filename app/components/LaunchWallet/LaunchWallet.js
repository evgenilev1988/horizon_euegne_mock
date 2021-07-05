import React from 'react'


import './LaunchWallet.scss';

const LaunchWallet = ({isMobile})=>(
    <div className={`outlined-wrap ml-5 ${isMobile && 'outlined-wrap-mobile'}`}>
        <a href="https://sequence.app" target="_blank" className="button outlined text-medium-gray">
            <span className="relative">
                Launch Wallet
            </span>
        </a>
    </div>
)

export default LaunchWallet;