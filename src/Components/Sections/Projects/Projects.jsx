import React, { Fragment } from 'react';
import ProjectCard from '../../Card/ProjectCard/ProjectCard';
import Container from '../../Container/Container';
import './Projects.css';

// Web pictures imports
import covid from '../../../assets/images/covidtracker.png';
import chambre from '../../../assets/images/chambreChezMamieDo.png';
import godefroyShop from '../../../assets/images/godefroy-shopping.png';
import gmagroWeb from '../../../assets/images/gmagroww.png';
import portfolio from '../../../assets/images/portfolio.png';


// Java pictures imports
import covidJava from '../../../assets/images/covidtracker-java.png';
import ipLocalizer from '../../../assets/images/iplocalizer.png';
import gmagro from '../../../assets/images/gmagro.png';


const Projects = () => {
    return (
        <Fragment>
            <div className="min-vh-100">
                <h2 className="text-center mt-5"><span style={{ color: '#569CD6' }}>&lt;Section&gt;</span>My Projects<span style={{ color: '#569CD6' }}>&lt;/Section&gt;</span></h2>

                <h4 className="comment text-center">&lt;!-- Some Projects may be 404 or deprecated --&gt;</h4>

                { /* Web Projects */ }
                <h3 style={{ color: '#43BC90'}} className="text-center mt-5">&lt;Web Projects /&gt;</h3>
                <Container>
                    <ProjectCard img={ portfolio } title="My Portfolio" desc="Yes, it's that portfolio you're thinking about.">
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#01CFF4' }} className="fab fa-react"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#3C9CD7' }} className="fab fa-css3"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#F7DF1E' }} className="fab fa-js-square"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#5D3D8B' }} className="fab fa-bootstrap"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#C76494' }} className="fab fa-sass"></i>
                        </div>
                    </ProjectCard>

                    <ProjectCard img={ covid } isNew={ true } title="Covid19 Tracker" desc="Retrieve data of the Covid19 pandemic, stay home and wear a mask !" repo="https://github.com/Neox63/Covid19-Tracker" prod="https://covid19-tracker-eta.vercel.app/">
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#01CFF4' }} className="fab fa-react"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#3C9CD7' }} className="fab fa-css3"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#F7DF1E' }} className="fab fa-js-square"></i>
                        </div>
                    </ProjectCard>

                    <ProjectCard img={ chambre } title="Chambre Chez Mamie Do" desc="A fully responsive guestroom website. Kinda my first freelance project !" prod="http://www.chambrechezmamiedo.com/">
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#E44D26' }} className="fab fa-html5"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#3C9CD7' }} className="fab fa-css3"></i>
                        </div>
                        <div className="ml-3 mr-3">
                            <i style={{ color: '#777BB3' }} className="fab fa-php"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#F7DF1E' }} className="fab fa-js-square"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#9D6C27' }} className="fas fa-database"></i>
                        </div>
                    </ProjectCard>

                    <ProjectCard img={ gmagroWeb } school = { true } title="GMAO" desc="The web version of the GMAO Software Project !">
                        <div className="ml-4 mr-3">
                            <i style={{ color: '#777BB3' }} className="fab fa-php"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#3C9CD7' }} className="fab fa-css3"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#5D3D8B' }} className="fab fa-bootstrap"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#9D6C27' }} className="fas fa-database"></i>
                        </div>
                    </ProjectCard>            
                    
                    <ProjectCard img={ godefroyShop } school = { true } deprecated = { true } isNew={ false } title="Godefroy Shopping" desc="A website for the sale of used products, wanna buy something ?" prod="http://sio.jbdelasalle.com/godefroyshopping3/index.php?page=connexion">
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#E44D26' }} className="fab fa-html5"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#3C9CD7' }} className="fab fa-css3"></i>
                        </div>
                        <div className="ml-3 mr-3">
                            <i style={{ color: '#777BB3' }} className="fab fa-php"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#9D6C27' }} className="fas fa-database"></i>
                        </div>
                    </ProjectCard>
                </Container>

                { /* Java Projects */ }
                <h3 style={{ color: '#43BC90'}} className="text-center mt-5">&lt;Java Projects /&gt;</h3>
                <Container>
                    <ProjectCard img={ covidJava } deprecated = { false } isNew={ true } title="Covid19 Tracker Java" desc="Kinda the same application as the ReactJS one above but built with JavaFX. Once again, stay home !" repo="https://github.com/Neox63/Covid19-Tracker-Java">
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#DE322D' }} className="fab fa-java"></i>
                        </div>
                    </ProjectCard>

                    <ProjectCard img={ ipLocalizer } deprecated = { true } isNew={ false } title="IP Localizer" desc="Wanna locate someone ? This is what you need !">
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#DE322D' }} className="fab fa-java"></i>
                        </div>
                    </ProjectCard>

                    <ProjectCard img={ gmagro } school = { true } title="GMAO Manager Tool" desc="The administrator application for the GMAO project above !">
                        <div className="ml-4 mr-4">
                            <i style={{ color: '#DE322D' }} className="fab fa-java"></i>
                        </div>
                        <div className="ml-3 mr-3">
                            <i style={{ color: '#777BB3' }} className="fab fa-php"></i>
                        </div>
                    </ProjectCard>
                </Container>
            </div>
        </Fragment>
    )
}

export default Projects;
