/* eslint-disable react/jsx-no-comment-textnodes */

import React, { Fragment } from 'react';
import ProjectCard from '../../Card/ProjectCard/ProjectCard';
import Container from '../../Container/Container';

// Web pictures imports
import covid from '../../../assets/images/covidtracker.png';
import chambre from '../../../assets/images/chambreChezMamieDo.png';
import godefroyShop from '../../../assets/images/godefroy-shopping.png';
import gmagroWeb from '../../../assets/images/gmagroww.png';
import portfolio from '../../../assets/images/portfolio.png';
import mp3 from '../../../assets/images/mp3.png';

// Java pictures imports
import covidJava from '../../../assets/images/covidtracker-java.png';
import ipLocalizer from '../../../assets/images/iplocalizer.png';
import gmagro from '../../../assets/images/gmagro.png';


const Projects = () => {
    return (
        <Fragment>
            <div className="min-vh-100">
                <h3 style={{ color: '#43BC90'}} className="text-center mt-5">&lt;Projects /&gt;</h3>

                <h5 className="comment text-center">/* Some projects may be 404 or deprecated */</h5>
                <Container>
                    <ProjectCard 
                        img={ portfolio } 
                        title="My Portfolio" 
                        desc="Yes, it's that portfolio you're thinking about."
                        prod="/"
                    >
                        <div className="ml-4 mr-4">
                            <i title="ReactJS" style={{ color: '#01CFF4' }} className="fab fa-react"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i title="CSS3" style={{ color: '#3C9CD7' }} className="fab fa-css3"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i title="Javascript" style={{ color: '#F7DF1E' }} className="fab fa-js-square"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i title="Bootstrap" style={{ color: '#5D3D8B' }} className="fab fa-bootstrap"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i title="Sass" style={{ color: '#C76494' }} className="fab fa-sass"></i>
                        </div>
                    </ProjectCard>

                    <ProjectCard 
                        img={ covid } 
                        isNew 
                        title="Covid19 Tracker" 
                        desc="Retrieve data of the Covid19 pandemic, stay home and wear a mask !" 
                        repo="https://github.com/Neox63/Covid19-Tracker" 
                        prod="https://covid19-tracker-eta.vercel.app/"
                    >
                        <div className="ml-4 mr-4">
                            <i title="ReactJS" style={{ color: '#01CFF4' }} className="fab fa-react"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i title="CSS3" style={{ color: '#3C9CD7' }} className="fab fa-css3"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i title="JavaScript" style={{ color: '#F7DF1E' }} className="fab fa-js-square"></i>
                        </div>
                    </ProjectCard>

                    <ProjectCard 
                        img={ mp3 } 
                        title="MP3 Downloader" 
                        desc="Download your favorite YouTube musics with this tool !" 
                        repo="https://github.com/Neox63/MP3-Downloader" 
                        prod="http://music-downloader.ml/"
                    >
                        <div className="ml-3 mr-3">
                            <i title="PHP" style={{ color: '#777BB3' }} className="fab fa-php"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i title="CSS3" style={{ color: '#3C9CD7' }} className="fab fa-css3"></i>
                        </div>
                    </ProjectCard>

                    <ProjectCard 
                        img={ chambre } title="Chambre Chez Mamie Do" 
                        desc="A fully responsive guestroom website. Kinda my first freelance project !" 
                        prod="http://www.chambrechezmamiedo.com/"
                    >
                        <div className="ml-4 mr-4">
                            <i title="HTML5" style={{ color: '#E44D26' }} className="fab fa-html5"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i title="CSS3" style={{ color: '#3C9CD7' }} className="fab fa-css3"></i>
                        </div>
                        <div className="ml-3 mr-3">
                            <i title="PHP" style={{ color: '#777BB3' }} className="fab fa-php"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i title="JavaScript" style={{ color: '#F7DF1E' }} className="fab fa-js-square"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i title="MySQL" style={{ color: '#9D6C27' }} className="fas fa-database"></i>
                        </div>
                    </ProjectCard>

                    <ProjectCard 
                        img={ gmagroWeb } 
                        schoolProject 
                        title="GMAO" 
                        desc="The web version of the GMAO Software Project."
                    >
                        <div className="ml-4 mr-4">
                            <i title="HTML5" style={{ color: '#E44D26' }} className="fab fa-html5"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i title="CSS3" style={{ color: '#3C9CD7' }} className="fab fa-css3"></i>
                        </div>
                        <div className="ml-4 mr-3">
                            <i title="PHP" style={{ color: '#777BB3' }} className="fab fa-php"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i title="Bootstrap" style={{ color: '#5D3D8B' }} className="fab fa-bootstrap"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i title="MySQL" style={{ color: '#9D6C27' }} className="fas fa-database"></i>
                        </div>
                    </ProjectCard>            
                    
                    <ProjectCard 
                        img={ godefroyShop } 
                        schoolProject 
                        isNew={ false } 
                        title="Godefroy Shopping" 
                        desc="A website for the sale of used products." 
                        prod="http://sio.jbdelasalle.com/godefroyshopping3/index.php?page=connexion"
                    >
                        <div className="ml-4 mr-4">
                            <i title="HTML5" style={{ color: '#E44D26' }} className="fab fa-html5"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i title="CSS3" style={{ color: '#3C9CD7' }} className="fab fa-css3"></i>
                        </div>
                        <div className="ml-3 mr-3">
                            <i title="PHP" style={{ color: '#777BB3' }} className="fab fa-php"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i title="MySQL" style={{ color: '#9D6C27' }} className="fas fa-database"></i>
                        </div>
                    </ProjectCard>

                    <ProjectCard 
                        img={ covidJava } 
                        isNew 
                        title="Covid19 Tracker Java" 
                        desc="The same application as the ReactJS one above but built with JavaFX. Once again, stay home !" 
                        repo="https://github.com/Neox63/Covid19-Tracker-Java"
                    >
                        <div className="ml-4 mr-4">
                            <i title="Java" style={{ color: '#DE322D' }} className="fab fa-java"></i>
                        </div>
                    </ProjectCard>

                    <ProjectCard 
                        img={ ipLocalizer } 
                        deprecated 
                        isNew={ false } 
                        title="IP Localizer" 
                        desc="Wanna locate someone ? This is what you need !"
                    >
                        <div className="ml-4 mr-4">
                            <i title="Java" style={{ color: '#DE322D' }} className="fab fa-java"></i>
                        </div>
                    </ProjectCard>

                    <ProjectCard 
                        img={ gmagro } 
                        schoolProject 
                        title="GMAO Manager Tool" 
                        desc="The administrator application for the GMAO project above."
                    >
                        <div className="ml-4 mr-4">
                            <i title="Java" style={{ color: '#DE322D' }} className="fab fa-java"></i>
                        </div>
                        <div className="ml-3 mr-3">
                            <i title="PHP" style={{ color: '#777BB3' }} className="fab fa-php"></i>
                        </div>
                    </ProjectCard>
                </Container>
            </div>
        </Fragment>
    )
}

export default Projects;
