/* eslint-disable react/jsx-no-comment-textnodes */

import { Fragment } from "react";
import EFourCard from "../Card/E4Card/EFourCard.jsx";
import Container from "../Container/Container.jsx";
import gmagroDesktop from '../../assets/E4/Desktop/gmagrodesktop-mockup.png';
import gmagroAndroid from '../../assets/E4/Android/gmagroandroid-mockup.png';
import gmagroWeb from '../../assets/E4/Web/gmagroweb-mockup.png';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";


const EFour = () => {
    return (
        <Fragment>
            <Link to="/"><h4 className="btn home-button" style={{ fontSize: '1.5rem', color: '#43BC90'}}>Retour</h4></Link>
            <div className="min-vh-100 d-flex align-items-center justify-content-center flex-column">
                <h1 style={{ color: '#43BC90'}} className="text-center mb-3">&lt;E4 Projects /&gt;</h1>

                <h4 className="comment text-center mb-5">/* This section contains all of the projects for the E4 test. */</h4>
                <Container>
                    <EFourCard title="GMAGRO Web" path="gmagro-web" image={ gmagroWeb } color="#58BAED" />
                    <EFourCard title="GMAGRO Android" path="gmagro-android" image={ gmagroAndroid } color="#6200EE" />
                    <EFourCard title="GMAGRO Desktop" path="gmagro-desktop" image={ gmagroDesktop } color="#FFBB45" />
                </Container>
            </div>
            <Footer />
        </Fragment>
    )
}

export default EFour;
