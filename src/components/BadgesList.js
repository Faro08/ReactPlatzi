import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';

import './styles/BadgesList.css'

function useSearchBadges(badges){
    const [query, setQuery] = React.useState('');
    const [filteredBadges, setFilteredBadges] = React.useState(badges)

    React.useMemo(() => {
        const result = badges.filter(badge =>{
            return `${badge.firstName} ${badge.lastName}`
            .toLowerCase()
            .includes(query.toLowerCase());
        });

        setFilteredBadges(result)
    }, [badges, query]);

    return { query, setQuery, filteredBadges }
}

function BadgeList (props){
    const badges = props.badges;
    
    const {query, setQuery, filteredBadges} = useSearchBadges(badges);

    if(filteredBadges.length === 0){
        return(
            <div>
                <div className="form-group">
                <label>Filter Badges</label>
                <input 
                    type="text" 
                    className="form-control"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)  
                    }}
                />
            </div>
                <h3>No hay badges</h3>
                <Link className="btn btn-primary" to="/badges/new">
                    Crear nuevo badge
                </Link>
            </div>
        )
    }

    return (
        <div className="BadgesList">
            <div className="form-group">
                <label>Filter Badges</label>
                <input 
                    type="text" 
                    className="form-control"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)  
                    }}
                />
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map( (badge) =>{
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
        </div>
    );
    
}

export default BadgeList;