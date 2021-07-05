import React,{useState,useEffect} from 'react';
import ContactFormInput from './ContactFormInput/ContactFormInput';

import './ContactForm.scss';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

const ContactForm = ()=>{
    const [selectedElement,setSelectedElement] = useState(null);
    const [state, setState] = React.useState({
        email: "",
        firstName: "",
        lastName:"",
        project:"",
        tellUs:"",
        errors: {
            email: '',
            tellUs: ''
        }
      })

    const items = [
        {name:"email",label:"Your Email",error:state.errors.email,value:state.email},
        {name:"firstName",label:"First name",value:state.firstName},
        {name:"lastName",label:"Last name",value:state.lastName},
        {name:"project",label:"Project Website",value:state.project},
        {name:"tellUs",label:"Tell us about your project",error:state.errors.tellUs,value:state.tellUs,textarea:true},
    ]  
    var link =  <a href="https://chat.sequence.build" target="_blank">Join our Discord</a> ;
    var footerLink =  <a href="mailto:hello@sequence.build">hello@sequence.build</a> ;

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let email = false
        if(event.currentTarget.elements["email"].value === ""){
            email = true;
        }

        let tellUs = false
        if(event.currentTarget.elements["tellUs"].value === ""){
            tellUs = true;
        }

        const errors = {
                email: email ? "Oops! Please try another email" : '',
                tellUs: tellUs ? "Please tell us about your project" : ''
        }


        if(email || tellUs){
            setState({
                ...state,
                ...state.errors,
                errors
            });
            return;
        }
        else{
            alert("SUBMMITTED!");
        }
      }

    const onInputClick = (evt) => {
        setSelectedElement(evt.target.name);
    };
    
return (
    <div id="contact" className="form-section">
        <div className="contact-us-header">
            <h2>We're here to help</h2>
            <span>
                Sequence helps you build the next generation of Internet economies and experiences. {link} to chat with our team.
                <br/>
                For additional support, reach out below.    
            </span>
        </div>
    
        <form className="form" onSubmit={handleSubmit}>
            {
                items.map((item) =>{
                    return (<ContactFormInput key={item.name} {...item} active={selectedElement === item.name ? 'active' : ''} handleChange={handleChange} onInputClick={onInputClick}/>)
                })
            }
            <button href="/#" target="_blank" className="button button-gradient text-medium-gray" type="submit"><span className="relative">Submit</span></button>
        </form>


        <div className="footer-container">
            <span className="form-footer">
                We typically respond to inquiries within 48 hours<br/>
                You can also email us directly at {footerLink}
            </span>
        </div>

        
    </div>
);

}

export default ContactForm;


