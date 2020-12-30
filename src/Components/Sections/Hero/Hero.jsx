import './Hero.css';

const Hero = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100">
            <div className="d-flex flex-column justify-content-center p-3">
                <h2><span style={{ color: '#569CD6' }}>&lt;Welcome&gt;</span></h2>
                <h5 className="ml-5"><span style={{ color: '#569CD6' }}>&lt;Greetings&gt;</span>Hey ! Welcome to my portfolio<span style={{ color: '#569CD6' }}>&lt;/Greetings&gt;</span></h5>
                <h5 className="ml-5"><span style={{ color: '#569CD6' }}>&lt;Name&gt;</span>I'm Mathis<span style={{ color: '#569CD6' }}>&lt;/Name&gt;</span></h5>
                <h5 className="ml-5"><span style={{ color: '#569CD6' }}>&lt;WhoAmI&gt;</span>A French Full-Stack Web Developer<span style={{ color: '#569CD6' }}>&lt;/WhoAmI&gt;</span></h5>
                <h2><span style={{ color: '#569CD6' }}>&lt;/Welcome&gt;</span></h2>
                <h4 className="mt-5 comment">&lt;!-- Keep Scrolling --&gt;</h4>
            </div>
        </div>
    )
}

export default Hero;
