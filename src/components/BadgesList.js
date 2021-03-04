import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';

import './styles/BadgesList.css'

class BadgeList extends React.Component{
    render () {
        if(this.props.badges.length === 0){
            return(
                <div>
                    <h3>No hay badges</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Crear nuevo badge
                    </Link>
                </div>
            )
        }

        return (
            <ul className="list-unstyled BadgesList">
                {this.props.badges.reverse().map( (badge) =>{
                    return(
                        <li key={badge.id} className="BadgesListItem">
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                {/* <img src={badge.avatarUrl} alt="avatar" className="BadgesListItem__avatar"/> */}
                                <Gravatar
                                    className="BadgesListItem__avatar"
                                    email={badge.email}
                                    alt={`${badge.firstName} ${badge.lastName}`} /* "Avatar" */
                                />
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
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default BadgeList;