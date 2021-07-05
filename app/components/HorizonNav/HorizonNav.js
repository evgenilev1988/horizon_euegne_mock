import React from 'react';

import './HorizonNav.scss';

const HorizonNav = ({link}) =>{
    const {name, url,extrablurb,disabled,newTab} = link;
    return (
        <a className="link-item" href={url} target={newTab ? "_blank" : ""} disabled={disabled || false}>
            {name} <sup>{extrablurb}</sup>
        </a>
    );
};


export default HorizonNav;