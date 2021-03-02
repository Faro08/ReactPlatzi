import React from 'react';

import './styles/NotFound.css';

function NotFound(){
    return (
        <div className="container">
            <h1>404: Not Found</h1>
        </div>
    );
}

export default NotFound;

/* 
--Otra forma de hace que todas tus URL's que no existan sean redirigidas a
tu componente de 404 seria de la siguiente forma:
    Llamamos a nuestro componente 404 y luego utilizamos Redirect, el cual
    es un componente de React Router para hacer redirecciones; en este caso
    hacemos que todas las URL's que no correspondan a una declarada, sean 
    redirigidas a MiComponente404.

import { Redirect, Route } from "react-router-dom";

<Route path="/404" component={MiComponente404} />
<Redirect from="*" to="/404" /> 
*/