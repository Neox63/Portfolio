/* eslint-disable react/jsx-no-comment-textnodes */

import './Hero.css';

const Hero = () => {
    return (
        <div className="aer d-flex flex-column align-items-center justify-content-center min-vh-100">
            <div className="d-flex flex-column justify-content-center p-2 blurBg">
                <h4><span style={{ color: '#D197D9' }}>import </span><a style={{ color: '#569CD6' }} href='#about'>ThingsAboutMe</a> <span style={{ color: '#D197D9' }}>from </span><span style={{ color: '#CE9178' }}>'Brain'</span>;</h4>
                <h4><span style={{ color: '#D197D9' }}>import </span><a style={{ color: '#569CD6' }} href='#skills'>Skills</a> <span style={{ color: '#D197D9' }}>from </span><span style={{ color: '#CE9178' }}>'Stack Overflow'</span>;</h4>
                <h4 className="mb-4"><span style={{ color: '#D197D9' }}>import </span><a style={{ color: '#569CD6' }} href='#projects'>Projects</a> <span style={{ color: '#D197D9' }}>from </span><span style={{ color: '#CE9178' }}>'Sleepless Night'</span>;</h4>

                <h4 className="mb-4 comment">/* Pro Tip : import names are clickable to navigate faster ! */</h4>

                <h3><span style={{ color: '#569CD6' }}>const</span> <span style={{ color: '#CCDF32' }}>Welcome</span> = <span style={{ color: '#CCDF32' }}>()</span> <span style={{ color: '#569CD6' }}>=&gt;</span> <span style={{ color: '#CCDF32' }}>&#123;</span> </h3>
                <h4 className="ml-5"style={{ color: '#D197D9' }}>return (</h4>
                <h4 style={{marginLeft: '90px'}}>Hey there ! I'm Mathis, Full-Stack Web Developer.<span className="wave">👋</span></h4>
                <h4 className="ml-5"><span style={{ color: '#D197D9' }}>)</span>;</h4>
                <h3><span style={{ color: '#CCDF32' }}>&#125;</span></h3>
                <h4 className="mb-5 mt-3 comment">/* Scroll for more ! */</h4>
            </div>
        </div>
        
    )
}

export default Hero;