import React from 'react';
import useHover from '../../hooks/useHover';
import './FeatureDetail.scss';

const FeatureDetail = ({feature,index}) =>{
    const [hovering, attrs] = useHover()

    const {title,description} = feature;
    return (
        <div className={`feature-block item-${index} ${hovering ? 'active' : ''}`} {...attrs}>
            <h4 className={`gradient`}>{title}</h4>
            <div className="description">
                <p>
                    {description}
                </p>
            </div>
        </div>
        
    )
}

export default FeatureDetail;