import React from 'react';

import Navbar from './Navbar';

/* class Layout extends React.Component{

} */

function Layout(props){
    return (
       <React.Fragment>
           <Navbar/>
           {props.children}
       </React.Fragment>
    );
}

export default Layout;