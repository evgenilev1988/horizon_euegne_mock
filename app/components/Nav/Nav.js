import React,{useEffect, useState} from 'react';

import NavigatorLinks from '../NavigatorLinks/NavigatorLinks';
import LaunchWallet from '../LaunchWallet/LaunchWallet';
import NavMobile from '../NavMobile/NavMobile';
import '../../shared/styles.scss'

import Logo from '../../images/sequence.png';
import Menu from '../../images/menu.png';
import Close from '../../images/close.png';

import './Nav.scss'; 

const Nav = ()=>{
    const [menuOpen,setMenuOpen] = useState(false);

    const links = [
        {name:'Docs',extrablurb:'coming soon',url:'/test',disabled:true},
        {name:'Github',url:'https://github.com/0xsequence',newTab:true},
        {name:'Discord',url:'https://chat.sequence.build',newTab:true},
        {name:'Contact',url:'/#contact'}
    ];

    const onMenuOpen = ()=>{
        setMenuOpen(!menuOpen);
    }
   
    return (
        <div>
            <div className="nav">
                <div>
                    <a href="/">
                        <img alt="logo" className="logo" src={Logo}/>
                    </a>
                </div>
                <NavigatorLinks links={links}/>
                <LaunchWallet/>
            </div>
            <div className={`nav-mobile ${menuOpen ? 'mobile-is-open' : ''}`}>
                <div className={`mobile-header-top-section ${menuOpen ? 'open' : ''}`}>
                    {menuOpen === false ? 
                        <button onClick={onMenuOpen}>
                            <img alt="logo" className="logo-mobile" src={menuOpen ? Close : Menu}/>
                        </button> :
                        <NavMobile onMenuOpen={onMenuOpen} menuOpen={menuOpen} links={links}/>
                    }                   
                </div>
            </div>
        </div>
    )
}

export default Nav;