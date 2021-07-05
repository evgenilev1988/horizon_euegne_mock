import React from 'react'

import './ContactFormInput.scss';

const ContactFormInput = (props)=>{
    const {name,label,error,active,textarea,value,handleChange,onInputClick} = props;
    const isError = error && error !== '';
return (    
        <div className="contact-form-input">
            <label htmlFor={name} className="label">{label}</label>
            {textarea ? 
                (   
                    <textarea name={name} 
                    className={`textarea ${isError ? 'error-field' : ''}`}
                    value={props.value} 
                    onChange={(evt) => handleChange(evt)} onClick={(evt) => onInputClick(evt)}
                    />
                ):
                (
                    <input type="text" name={name}
                        className={`input ${isError ? 'error-field' : ''} ${active && !isError ? 'active' : ''}`}
                        value={value} 
                        onChange={(evt) => handleChange(evt)} onClick={(evt) => onInputClick(evt)}
                    />
                )
            }
            <span className="error">{error}</span>
        </div>
);
        }

export default ContactFormInput;