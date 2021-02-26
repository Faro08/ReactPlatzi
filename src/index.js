// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
/* import BadgeNew from './pages/BadgeNew'; */
import Badges from './pages/Badges'; //crear nueva pagina



const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
    <Badges/> , container ); // renderizar Badges
       /*  firstName="Farid"
        lastName="Pasi "
        avatarUrl="https://www.gravatar.com/avatar?d=identicon"
        jobTitle="Frontend Developer"
        twitter="faridgp8" */
