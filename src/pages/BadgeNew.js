import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import NavBar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component{
    render (){
        return(
            <div>
                <NavBar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName="Farid"
                                lastName="Pasi"
                                twitter="@faridgp8"
                                jobTitle="Frontend developer"
                                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                    </div>

                </div>
            </div>
        );  
    }
}

export default BadgeNew;