/* eslint-disable react/jsx-no-comment-textnodes */

import React, { Fragment } from 'react';
import ProjectCard from '../../Card/ProjectCard/ProjectCard';
import Container from '../../Container/Container';

import portfolio from '../../../assets/images/portfolio.png';
import covid from '../../../assets/images/covidtracker.png';
import chambre from '../../../assets/images/chambreChezMamieDo.png';
import godefroyShop from '../../../assets/images/godefroy-shopping.png';
import mp3 from '../../../assets/images/mp3.png';
import scraper from '../../../assets/images/scraper.png';
import gasho from '../../../assets/images/gasho.png';
import covidJava from '../../../assets/images/covidtracker-java.png';
import gmagro from '../../../assets/E4/Desktop/gmagrodesktop-mockup.png';
import gmagroAndroid from '../../../assets/E4/Android/gmagroandroid-mockup.png';
import gmagroWeb from '../../../assets/E4/Web/gmagroweb-mockup.png';

const Projects = () => {
    return (
        <Fragment>
            <div className="min-vh-100">
                <h3 style={{ color: '#43BC90'}} className="title text-center mt-5">&lt;Projects /&gt;</h3>

                <h4 className="comment text-center">/* Freelance &amp; Personal */</h4>
                <Container>
                    <ProjectCard 
                        color="#3F077D"
                        img={ gasho } 
                        isNew 
                        title="Gasho Beats" 
                        desc="A simple portfolio for a French beat maker. Check it out !"
                        prod="https://gasho-beats.tk"  
                        freelance
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
                        color="#3D9944"
                        img={ scraper } 
                        isNew 
                        title="Web Scraper" 
                        desc="A tool for scraping websites that converts data to an Excel file." 
                        repo="https://github.com/Neox63/Asialand-Scraper" 
                    >
                        <div className="ml-4 mr-4">
                            <i title="JavaScript" style={{ color: '#F7DF1E' }} className="fab fa-js-square"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i title="NodeJS" style={{ color: '#366A31' }} className="fab fa-node-js"></i>
                        </div>
                    </ProjectCard>

                    <ProjectCard 
                        color="#3F077D"
                        img={ portfolio }  
                        title="My Portfolio" 
                        desc="Yes, it's that portfolio you're thinking about..."
                        repo="https://github.com/Neox63/Portfolio" 
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
                        color="#315FAA"
                        img={ covid }  
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
                        color="#00A97E"
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
                        color="#48443B"
                        img={ chambre } title="Chambre Chez Mamie Do" 
                        desc="A fully responsive guestroom website. Kinda my first freelance project !" 
                        prod="http://www.chambrechezmamiedo.com/"
                        freelance
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
                        color="#34495E"
                        img={ covidJava }  
                        title="Covid19 Tracker Java" 
                        desc="The same application as the ReactJS one above but built with JavaFX. Once again, stay home !" 
                        repo="https://github.com/Neox63/Covid19-Tracker-Java"
                    >
                        <div className="ml-4 mr-4">
                            <i title="Java" style={{ color: '#DE322D' }} className="fab fa-java"></i>
                        </div>
                    </ProjectCard>        
                </Container>

                <h4 className="comment text-center mt-5">/* School Projects &amp; PPE */</h4>
                
                <Container>
                    <ProjectCard 
                        color="#6200EE"
                        img={ gmagroAndroid } 
                        schoolProject 
                        title="GMAGRO Android" 
                        desc="An Android Application to manage the GMAGRO's interventions."
                        isNew
                        ppe
                        e4
                        path="gmagro-android"
                    >
                        <div className="ml-3 mr-3">
                            <i title="Android" style={{ color: '#A0C036' }} className="fab fa-android"></i>
                        </div>
                        <div className="ml-4 mr-4">
                            <i title="Java" style={{ color: '#DE322D' }} className="fab fa-java"></i>
                        </div>
                        <div className="ml-3 mr-3">
                            <i title="PHP" style={{ color: '#777BB3' }} className="fab fa-php"></i>
                        </div>
                    </ProjectCard>

                    <ProjectCard 
                        color="#E3F2FD"
                        img={ gmagroWeb } 
                        schoolProject 
                        title="GMAGRO Web" 
                        desc="A Web application for GMAGRO speakers."
                        ppe
                        e4
                        path="gmagro-web"
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
                        color="#FFBB44" 
                        img={ gmagro } 
                        schoolProject 
                        title="GMAGRO Desktop" 
                        desc="A Desktop application to manage the database of GMAGRO"
                        ppe
                        e4
                        path="gmagro-desktop"
                    >
                        <div className="ml-4 mr-4">
                            <i title="Java" style={{ color: '#DE322D' }} className="fab fa-java"></i>
                        </div>
                        <div className="ml-3 mr-3">
                            <i title="PHP" style={{ color: '#777BB3' }} className="fab fa-php"></i>
                        </div>
                    </ProjectCard>

                    <ProjectCard 
                        color="#D6A61F"
                        img={ godefroyShop } 
                        schoolProject 
                        title="Godefroy Shopping" 
                        desc="A website for the sale of used products." 
                        prod="http://sio.jbdelasalle.com/godefroyshopping3/index.php?page=connexion"
                        ppe
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
                </Container>
            </div>
        </Fragment>
    )
}

export default Projects;
