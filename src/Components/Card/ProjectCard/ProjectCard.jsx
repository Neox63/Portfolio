import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ children, img, title, desc, repo, prod, isNew, deprecated }) => {
    return (
        <div className="card m-3">
            <img className="card-img-top" src={ img } alt="Covid19-Tracker" />
            <div className="card-body">
                { (isNew) ? (<h4><span className="badge badge-pill badge-success">New</span></h4>) : ('') }
                { (deprecated) ? (<h5><span className="word-break badge badge-pill badge-warning">Warning : This is an old project</span></h5>) : ('') }
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">{ desc }</p>
                <div className="d-flex justify-content-center flex-wrap language-logo"> 
                    { children }
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                    { (repo) ? (<a target="_blank" rel="noopener noreferrer" href={ repo } className="btn btn-outline-info m-3">Check it on Github</a>) : (<a href={ repo } className="disabled btn btn-outline-info m-3">Not Available</a>) }  
                    { (prod) ? (<a target="_blank" rel="noopener noreferrer" href={ prod } className="btn btn-outline-warning m-3">Try it on Production</a>) : (<a href={ prod } className="disabled btn btn-outline-warning m-3">Not Available</a>) }                    
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
