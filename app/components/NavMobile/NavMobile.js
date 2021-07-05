import React from 'react';
import NavigatorLinks from '../NavigatorLinks/NavigatorLinks';
import LaunchWallet from '../LaunchWallet/LaunchWallet';

import Menu from '../../images/menu.png';
import Close from '../../images/close.png';
import LogoOnly from '../../images/logo_only.png';


const NavMobile = ({onMenuOpen,menuOpen,links})=>(
    <>
        <a href="/">
            <img alt="logo" className="logo-mobile" src={LogoOnly}/>
        </a>
        <button onClick={onMenuOpen}>
            <img alt="logo" className="logo-mobile" src={menuOpen ? Close : Menu}/>
        </button>
        <div className="nav-section">
            <nav className={`animation ${menuOpen ? 'opacity-anim' : 'opacity-0'}`}>
                <NavigatorLinks links={links} isMobile={true}/>
            </nav>
        </div>
        <LaunchWallet isMobile/>
        <p className="copy-rights">Copyright © 2021 Horizon Blockchain Games Inc.</p>
    </>
);

export default NavMobile;