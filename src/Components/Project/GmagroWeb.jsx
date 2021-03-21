import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import mockup from '../../assets/E4/Web/gmagroweb-mockup.png';
import Footer from '../Footer/Footer';

const GmagroWeb = () => {

    const imgStyle = {
        borderRadius: "15px",
        filter: `drop-shadow(0 0 0.25rem #43BC90)`
    }

    return (
        <Fragment>
            <Link to="/e4"><h4 className="btn home-button" style={{ fontSize: '1.5rem', color: '#43BC90'}}>&lt;E4 Page /&gt;</h4></Link>
            <div className="min-vh-100 d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center flex-wrap">
                    <div className="m-3 img-wrapper">
                        <img style={ imgStyle } className="mockup-img" alt="Application Mockup" src={ mockup } />
                    </div>
                    <div className="m-3 d-flex flex-column flex-wrap content text-break blurBg">
                        <h3 className="title mb-4" style={{ color: '#43BC90'}}>&lt;GMAGRO Web Version /&gt;</h3>
                        <h4><span style={{ color: '#569CD6' }}>const</span> <span style={{ color: '#CCDF32' }}>title</span> = <span style={{ color: '#CE9178' }}>'GMAGRO'</span>;</h4>
                        <h4 className="mt-4"><span style={{ color: '#569CD6' }}>const</span> <span style={{ color: '#CCDF32' }}>description</span> = <span style={{ color: '#CCDF32' }}>()</span> <span style={{ color: '#569CD6' }}>=&gt;</span> <span style={{ color: '#CCDF32' }}>&#123;</span></h4>
                        <h4 style={{ color: '#D197D9' }} className="ml-4">return (</h4>
                        <p className="biography ml-5">
                            Lol trop cool gmagro web mdr ^^
                        </p>
                        <h4 className="ml-4"><span style={{ color: '#D197D9' }}>)</span>;</h4>
                        <h4><span style={{ color: '#CCDF32' }}>&#125;</span></h4>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default GmagroWeb;
