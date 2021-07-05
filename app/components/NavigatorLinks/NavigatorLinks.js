import React from 'react';
import HorizonNav from '../HorizonNav/HorizonNav';
import './NavigatorLinks.scss';

const NavigatorLinks = ({links,isMobile})=>(
    <div className={`navigator-links ${isMobile && 'isMobile'}`}>
                {links.map((link,index) =>
                    <HorizonNav key={index} link={link}/>   
                )}
    </div> 
);

export default NavigatorLinks;