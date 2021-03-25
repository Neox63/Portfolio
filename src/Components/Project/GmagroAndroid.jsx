/* eslint-disable react/jsx-no-comment-textnodes */

import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

import mockup from '../../assets/E4/Android/gmagroandroid-mockup.png';
import gmagro from '../../assets/E4/gmagro.png';
import connexionPage from '../../assets/E4/Android/androidConnexion.png';
import maquette from '../../assets/E4/Android/maquette.png';

import fiche from '../../assets/E4/Fiches/Web.doc';
import Annexe from './Parts/Annexe';
import Container from '../Container/Container';

const GmagroWeb = () => {

    const imgStyle = {
        borderRadius: "15px",
        filter: `drop-shadow(0 0 0.25rem #43BC90)`,
    }

    const imgStyleMaquette = {
        borderRadius: "15px",
        filter: `drop-shadow(0 0 0.25rem #43BC90)`,
        height: "600px"
    }

    return (
        <Fragment>
            <div className="landing-android">
                <div className="darkBg">
                    <Link to="/e4"><h4 className="btn home-button" style={{ fontSize: '1.5rem', color: '#43BC90'}}>Retour</h4></Link>
                    <div className="min-vh-100 d-flex justify-content-center align-items-center flex-column text-break flex-wrap">
                        <h1 className="text-center" style={{ color: '#43BC90'}}>&lt;GMAGRO Android /&gt;</h1>
                        <h4 className="comment text-center mb-5">/* Documentation de l'application */</h4>
                        <Container>
                            <div className="ml-3 mr-3">
                                <i title="Android" style={{ color: '#A0C036' }} class="fab fa-android"></i>
                            </div>
                            <div className="ml-4 mr-4">
                                <i title="Java" style={{ color: '#DE322D' }} className="fab fa-java"></i>
                            </div>
                            <div className="ml-3 mr-3">
                                <i title="PHP" style={{ color: '#777BB3' }} className="fab fa-php"></i>
                            </div>
                        </Container>  
                    </div>
                </div>
            </div>
            
            <div className="min-vh-100 d-flex justify-content-center align-items-center flex-column text-break flex-wrap">
                <h3 className="title text-center mb-5" style={{ color: '#43BC90'}}>Contexte du projet</h3>
                <div className="d-flex justify-content-center align-items-center text-break flex-wrap">
                    <div className="m-3 img-wrapper">
                        <img style={ imgStyle } className="mockup-img" alt="Application Mockup" src={ gmagro } />
                    </div>
                    <div className="m-3 d-flex flex-column flex-wrap content text-break">
    
                        <p style={{ fontSize: "1.4rem" }} className="description">
                            Dans le cadre de la formation des élèves en BAC Maintenance des Equipements Industriels, de nombreux logiciels industriels existent. <br/><br/>
                            Ils sont souvent très complexes, difficilement transposables et configurables pour une formation d’apprentissage. <br/><br/>
                            Les projet de cette année est destiné à fournir aux élèves de Bac MEI des outils informatiques capables de relever le défi de la GMAO dans le secteur industriel, en rendant l’utilisation la plus simple possible et en centralisant l’action au cœur de leur métier.
                        </p>
                    </div>
                </div>
            </div>

            <Annexe fiche={ fiche } apk repo="https://github.com/Neox63/GMAO-Android" />
            <Footer />
        </Fragment>
    )
}

export default GmagroWeb;
