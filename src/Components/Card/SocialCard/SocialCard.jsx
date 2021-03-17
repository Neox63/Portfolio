import React, { Fragment } from 'react';
import './SocialCard.css';

const SocialCard = ({ children, link, color }) => {

    const filter = { filter: `drop-shadow(0 0 0.15rem ${color})` }

    return (
        <Fragment>
            <div style={filter} className="social d-flex flex-column justify-content-center align-items-center m-3">
                <a target="_blank" rel="noopener noreferrer" href={link}>
                    { children }
                </a>
            </div>
        </Fragment>
    )
}

export default SocialCard;
