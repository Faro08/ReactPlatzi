import React from 'react'

import './styles/BadgesList.css'

class BadgeList extends React.Component{
    render (){
        return (
            <ul className="list-unstyled">
                {this.props.badges.map( (badge) =>{
                    return(
                        <li key={badge.id} classNane="BadgesListItem">
                            <img src={badge.avatarUrl} alt="avatar" className="BadgesListItem__avatar"/>
                            <div>
                                <div>
                                    <strong>{badge.firstName} {badge.lastName}</strong>
                                </div>
                                <div className="Twitter__name">
                                    <span className="Twitter__logo"></span>
                                    @{badge.twitter}
                                </div>
                                <div>{badge.jobTitle}</div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default BadgeList