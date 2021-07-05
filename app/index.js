import React from 'react';
import ReactDom from 'react-dom';

import Nav from './components/Nav/Nav';
import FeaturesGrid from './components/FeaturesGrid/FeaturesGrid';
import ContactForm from './components/ContantForm/ContactForm';
import './index.scss';

const app = (
    <div className="mock-app">
        <Nav/>
        <FeaturesGrid/>
        <ContactForm/>
    </div>
);


ReactDom.render(app,document.getElementById('app'));
