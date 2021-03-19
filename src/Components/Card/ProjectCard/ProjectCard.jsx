import './ProjectCard.css';

const ProjectCard = ({ children, color, img, title, desc, repo, prod, isNew, schoolProject, ppe, freelance, e4 }) => {

    const filter = { filter: `drop-shadow(0 0 0.25rem ${color})` }

    return (
        <div style={ filter } className="project-card card m-3">
            <img className="card-img-top" src={ img } alt={ title } />
            <div className="card-body">
                <div className="d-flex flex-wrap">
                    { (isNew) ? (<h5 style={{letterSpacing: '1px'}}><span className="badge badge-pill badge-success mr-2">New</span></h5>) : ('') }
                    { (freelance) ? (<h5 style={{letterSpacing: '1px'}}><span className="badge badge-pill badge-danger mr-2">Freelance</span></h5>) : ('') }
                    { (schoolProject) ? (<h5><span className="word-break badge badge-pill badge-info mr-2">School Project</span></h5>) : ('') }
                    { (repo) ? (<h5><span className="word-break badge badge-pill badge-primary mr-2">Open Source</span></h5>) : ('') }
                    { (ppe) ? (<h5><span className="word-break badge badge-pill badge-secondary mr-2">PPE</span></h5>) : ('') }
                </div>
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">{ desc }</p>
                <div className="d-flex justify-content-center flex-wrap language-logo"> 
                    { children }
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                    { (repo) ? (<a target="_blank" rel="noopener noreferrer" href={ repo } className="btn btn-outline-info m-3">Check it on Github</a>) : (<a href={ repo } className="disabled btn btn-outline-info m-3">Not Available</a>) }  
                    { (prod) ? (<a target="_blank" rel="noopener noreferrer" href={ prod } className="btn btn-outline-warning m-3">Live Demo</a>) : (<a href={ prod } className="disabled btn btn-outline-warning m-3">Not Available</a>) }                    
                    { (ppe) ? (<a download target="_blank" rel="noopener noreferrer" href={ e4 } className="btn btn-outline-danger m-3">E4</a>) : ('') }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
