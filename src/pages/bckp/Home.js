import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import confLogo from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg';

function Home(){
    return(
        <div className="Home__hero">
            <div className="container">
                <div className="row">    
                    <div className="col-3">
                        <img className="Home__ConfLogo" src={confLogo} alt="Conf Logo"/>
                        <h4 className="font-weight-bolder text-white">PRINT YOUR BADGES</h4>
                        <p className="font-weight-bold text-white">The easiest way to manage your conference</p>
                        <div className="Hero__button">
                            <Link to="/Badges" className="btn btn-primary">
                                Start now
                            </Link>    
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div classname="col-3">
                        <img className="Hero__Astronauts" src={astronauts} alt="Astronauts"/>
                    </div>
                </div> 
            </div>
        </div>
    );

}

export default Home;