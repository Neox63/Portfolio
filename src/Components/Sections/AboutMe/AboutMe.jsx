/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */

import { Fragment, useState, useEffect } from 'react';
import Container from '../../Container/Container';
import SocialCard from '../../Card/SocialCard/SocialCard';
import './AboutMe.css';

import { getGithubPic } from '../../../github.js';
import profilePic from '../../../assets/images/neox.jpg';


const AboutMe = () => {
    const [age, setAge] = useState(0);
    const [pp, setPP] = useState('');
    
    const calculateAge = (birthday) => {
        const diff = Date.now() - birthday.getTime();
        const currentAge = new Date(diff);
        setAge(Math.abs(currentAge.getUTCFullYear() - 1970));
    }

    const getData = async () => {
        const data = await getGithubPic();

        data ? setPP(data) : setPP(profilePic)
    }

    useEffect(() => {
        getData();
        const birthday = new Date(2001, 9, 30);
        calculateAge(birthday);
    }, []);

    return (
        <Fragment>
            <div className="min-vh-100">
                <div className="d-flex justify-content-center flex-wrap">
                    <div className="m-3 img-wrapper">
                        <img className="img" alt="Neox" src={ pp } />
                        <h6 className="mt-3 comment text-center">/* Hey, it's me ! */</h6>
                    </div>
                    <div className="m-3 d-flex flex-column flex-wrap content text-break blurBg">
                        <h3 className="title mb-4" style={{ color: '#43BC90'}}>&lt;About me /&gt;</h3>
                        <h4><span style={{ color: '#569CD6' }}>const</span> <span style={{ color: '#CCDF32' }}>name</span> = <span style={{ color: '#CE9178' }}>'Mathis Chambon'</span>;</h4>
                        <h4 className="mt-1"><span style={{ color: '#569CD6' }}>let</span> <span style={{ color: '#CCDF32' }}>age</span> = <span style={{ color: '#CE9178' }}> '{ age } years old'</span>;</h4>
                        <h4 className="mt-1"><span style={{ color: '#569CD6' }}>const</span> <span style={{ color: '#CCDF32' }}>job</span> = <span style={{ color: '#CE9178' }}>'Full-Stack Web Developer'</span>;</h4>
                        <h4 className="mt-1"><span style={{ color: '#569CD6' }}>const</span> <span style={{ color: '#CCDF32' }}>languages</span> = <span style={{ color: '#569CD6' }}>[</span><span style={{ color: '#CE9178' }}>'French (Native)'</span><span>,</span><span style={{ color: '#CE9178' }}> 'English (B2)'</span><span>,</span><span style={{ color: '#CE9178' }}> 'Spanish (A1)'</span><span style={{ color: '#569CD6' }}>]</span>;</h4>
                        <h4 className="mt-4"><span style={{ color: '#569CD6' }}>const</span> <span style={{ color: '#CCDF32' }}>biography</span> = <span style={{ color: '#CCDF32' }}>()</span> <span style={{ color: '#569CD6' }}>=&gt;</span> <span style={{ color: '#CCDF32' }}>&#123;</span></h4>
                        <h4 style={{ color: '#D197D9' }} className="ml-4">return (</h4>
                        <p className="biography ml-5">
                            I'm a French passionate Developer specialized with the <a target="_blank" rel="noopener noreferrer" style={{ color: '#569CD6' }} href='https://www.mongodb.com/mern-stack'>MERN Stack</a>. <br/>
                            Team work lover, I'm paying high attention to code quality. <br/><br/>
                            I started programming at 16, self-taught with <i style={{ color: '#E44D26' }} className="fab fa-html5"></i> and <i style={{ color: '#3C9CD7' }} className="fab fa-css3"></i>. 
                            I'm currently studying in a <a target="_blank" rel="noopener noreferrer" style={{ color: '#569CD6' }} href='https://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers'>BTS SIO</a> where I mainly learn <i style={{ color: '#DE322D' }} className="fab fa-java"></i> and <i style={{ color: '#777BB3' }} className="fab fa-php"></i>, I work a lot by my side with <i style={{ color: '#01CFF4' }} className="fab fa-react"></i> and <i style={{ color: '#366A31' }} className="fab fa-node"></i>. <br /> <br />
                            I'm also an open source lover, i'm frequently contributing on different projects on Github.
                        </p>
                        <h4 className="ml-4"><span style={{ color: '#D197D9' }}>)</span>;</h4>
                        <h4><span style={{ color: '#CCDF32' }}>&#125;</span></h4>
                    </div>
                </div>
                <div className="d-flex justify-content-center m-3">
                    <div className="d-flex flex-column text-center">
                        <h3 style={{ color: '#43BC90'}} className="title mt-5 mb-3">Let's make something great !</h3>
                        <h4 className="mb-4">You can reach me at the social medias below</h4>
                        <h6 className="comment">/* I'm a nerd, you'll get an answer quickly */</h6>
                        <Container>
                            <SocialCard color="#fff" link="https://github.com/Neox63">
                                <i style={{ color: '#fff' }} className='fab fa-github'></i>
                            </SocialCard>

                            <SocialCard color="#b7453e" link="mailto:itmagine.dev@gmail.com">
                                <i style={{ color: '#b7453e' }} className='fas fa-paper-plane'></i>
                            </SocialCard>
                        </Container>
                        <h5 className="mt-3">Download my CV <a style={{ color: '#569CD6' }} href="#">here</a></h5>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutMe;
