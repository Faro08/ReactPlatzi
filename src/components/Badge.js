import React from 'react';

import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <img src={confLogo} alt="logo"/>
                </div>
                <div>
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="avatar"/>
                    <h1>Farid<br/>Pasi</h1>
                </div>
                <div>
                    <p>Frontend Developer</p>
                    <p>@faridgp8</p>
                    <p>Inibot NEA</p>
                </div>
            </div>
        )

    }
}

export default Badge;