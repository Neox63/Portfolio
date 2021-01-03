import React, { Fragment } from 'react';
import './SocialCard.css';

const SocialCard = ({ children, link }) => {
    return (
        <Fragment>
            <div className="social d-flex justify-content-center align-items-center m-3">
                <a href={link}>
                    { children }
                </a>
            </div>
        </Fragment>
    )
}

export default SocialCard;
