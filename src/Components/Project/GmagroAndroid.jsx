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

            <div className="min-vh-100 d-flex justify-content-center align-items-center flex-column text-break flex-wrap">
                <h3 className="title text-center mb-5" style={{ color: '#43BC90'}}>Présentation de l'application</h3>
                <div className="d-flex justify-content-center align-items-center text-break flex-wrap">
                    <div className="m-3 d-flex flex-column flex-wrap content text-break">
                        <p style={{ fontSize: "1.4rem" }} className="description">
                            Ceci est la version Android du projet GMAGRO. Cette application est destinée aux Intervenants de la plateforme. <br/>
                            Elle doit pouvoir assurer la gestion des interventions par ces derniers depuis un terminal Android. <br/> <br/>
                            Ainsi, l'application permet l'insertion, la modification et la visualisation des interventions d'un site donné. <br/> <br/>
                            GMAGRO communique avec une API PHP hébergée sur le serveur du lycée. <br/>
                            Cette API, récupère et met à jour une base de donnée MySQL qui répertorie toutes les données des intervenants et interventions et renvoie les données sous format JSON.
                        </p>
                    </div>

                    <div className="m-3 img-wrapper">
                        <img style={ imgStyle } className="mockup-img" alt="Application Mockup" src={ mockup } />
                    </div>
                </div>
            </div>

            <div className="min-vh-100 d-flex justify-content-center align-items-center flex-column text-break flex-wrap">
                <h3 className="title text-center mb-3" style={{ color: '#43BC90'}}>Maquette de l'application</h3>
                <h5 className="comment text-center">/* Maquette fournie dans le cahier des charges */</h5>
                <div className="d-flex justify-content-center align-items-center text-break flex-wrap">
                        <img style={ imgStyleMaquette } className="mockup-img m-3" alt="Application Mockup" src={ maquette } />
                </div>
            </div>
            
            <div className="min-vh-100 d-flex justify-content-center align-items-center flex-column text-break flex-wrap">
                <h3 className="title text-center mb-5" style={{ color: '#43BC90'}}>Connexion à l'application</h3>
                <div className="d-flex justify-content-center align-items-center text-break flex-wrap">
                    <div className="m-3 img-wrapper">
                        <img style={ imgStyle } className="mockup-img" alt="Application Mockup" src={ connexionPage } />
                        <h5 className="mt-3 comment text-center">/* Connexion à GMAGRO */</h5>
                    </div>
                    <div className="m-3 d-flex flex-column flex-wrap content text-break">
                        <p style={{ fontSize: "1.4rem" }} className="description">
                            Cette page permet l'authentification de l'intervenant via l'API de GMAGRO. <br/><br/>
                            Une fois les informations entrées, elles sont transmise au serveur web qui vérifie plusieurs données : 
                            <ul>
                                <li>La combinaison login / mot de passe</li>
                                <li>Les droits de l'utilisateur</li>
                                <li>L'UAI de l'utilisateur (Pour afficher les données correspondantes à son site attribué)</li>
                            </ul>
                        </p>
                    </div>
                    <div className="snippet">
                        <h4 className="mt-3">Requête cURL :</h4>
                        <div className="code-section p-3">
                            <code className="code">
                                <span className="char">GET -</span> <span className="str">http://sio.jbdelasalle.com/~mchambon/gmagro-android/ws.php?</span><span className="attribute">uc=connect&amp;mail=</span>karl_eriksson@gmail.com<span className="attribute">&amp;password=</span>eriksson
                            </code>
                        </div>

                        <h4 className="mt-3">Requête SQL :</h4>
                        <div className="code-section p-3 mt-3">
                            <code className="code">
                                <span className="char">SQL -</span> <span className="attribute">SELECT</span> * <span className="attribute">FROM</span> intervenant <span className="attribute">WHERE</span> mail = :mail <span className="attribute">AND</span> password = <span className="str">md5(</span>:password<span className="str">)</span><span className="char">;</span>
                            </code>
                        </div>

                        <h4 className="mt-3">Réponse :</h4>
                        <div className="code-section p-3">
                            <code className="code">
                                <span className="char">&#123;</span> <br/>
                                    <span className="attribute ml-4">"id"</span><span className="char">: </span><span className="value">"1"<span className="char">,</span></span> <br/>
                                    <span className="attribute ml-4">"nom"</span><span className="char">: </span><span className="value">"Karl"<span className="char">,</span></span> <br/>
                                    <span className="attribute ml-4">"prenom"</span><span className="char">: </span><span className="value">"Eriksson"<span className="char">,</span></span> <br/>
                                    <span className="attribute ml-4">"mail"</span><span className="char">: </span><span className="value">"karl_eriksson@gmail.com"<span className="char">,</span></span> <br/>
                                    <span className="attribute ml-4">"role_code"</span><span className="char">: </span><span className="value">"SuperAdmin"<span className="char">,</span></span> <br/>
                                    <span className="attribute ml-4">"site_uai"</span><span className="char">: </span><span className="value">"1234567A"</span> <br/>
                                <span className="char">&#125;</span> <br/>
                            </code>
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-vh-100 d-flex justify-content-center align-items-center flex-column text-break flex-wrap">
                <h3 className="title text-center my-5" style={{ color: '#43BC90'}}>Page d'accueil</h3>
                <div className="d-flex justify-content-center align-items-center text-break flex-wrap">
                    <div className="m-3 d-flex flex-column flex-wrap content text-break">
                        <p style={{ fontSize: "1.4rem" }} className="description">
                            La page d'accueil de l'application, elle répertorie les interventions non terminées sur le site associé à l'utilisateur connecté. L'intervenant peut se déconnecter de GMAGRO via le bouton de déconnexion (1)<br/> <br/>
                            Elle permet l'ajout d'une intervention (2), et la modification d'une intervention via un clique sur un des item de la listView (3). <br/> <br/>
                            La liste des intervention est également filtrable via le menu déroulant (4).
                        </p>
                    </div>
                    <div className="m-3 img-wrapper">
                        <img style={ imgStyle } className="mockup-img" alt="Application Mockup" src={ connexionPage } />
                        <h5 className="mt-3 comment text-center">/* Accueil de l'application */</h5>
                    </div>

                    <div className="snippet">
                        <h4 className="mt-3">Requête cURL :</h4>
                        <div className="code-section p-3">
                            <code className="code">
                                <span className="char">GET -</span> <span className="str">http://sio.jbdelasalle.com/~mchambon/gmagro-android/ws.php?</span><span className="attribute">uc=getInterventionByIntervenantId&amp;id=</span>1
                            </code>
                        </div>

                        <h4 className="mt-3">Requête SQL :</h4>
                        <div className="code-section p-3 mt-3">
                            <code className="code">
                                <span className="char">SQL -</span> <span className="attribute">SELECT</span> * <span className="attribute">FROM</span> intervention <span className="attribute">WHERE</span> intervenant_id = :id <span className="attribute">AND</span> dh_fin <span className="attribute">IS NULL</span><span className="char">;</span>
                            </code>
                        </div>

                        <h4 className="mt-3">Réponse :</h4>
                        <div className="code-section p-3">
                            <code className="code">
                                <span className="char">[</span> <br/>
                                    <span className="char ml-4">&#123;</span> <br/>
                                        <span className="attribute ml-5">"id"</span><span className="char">: </span><span className="value">"1"<span className="char">,</span></span><br/>
                                        <span className="attribute ml-5">"dh_debut"</span><span className="char">: </span><span className="value">"2021-01-01 00:00:00"<span className="char">,</span></span><br/>
                                        <span className="attribute ml-5">"dh_fin"</span><span className="char">: </span><span className="value">"null"<span className="char">,</span></span><br/>
                                        <span className="attribute ml-5">"commentaire"</span><span className="char">: </span><span className="value">"Exemple de commentaire"<span className="char">,</span></span><br/>
                                        <span className="attribute ml-5">"temps_arret"</span><span className="char">: </span><span className="value">"2:00:00"</span><span className="char">,</span><br/>
                                        <span className="attribute ml-5">"changement_organe"</span><span className="char">: </span><span className="value">"0"</span><span className="char">,</span><br/>
                                        <span className="attribute ml-5">"perte"</span><span className="char">: </span><span className="value">"1"</span><span className="char">,</span><br/>
                                        <span className="attribute ml-5">"dh_creation"</span><span className="char">: </span><span className="value">"2021-01-01 00:00:00"<span className="char">,</span></span><br/>
                                        <span className="attribute ml-5">"dh_derniere_maj</span><span className="char">: </span><span className="value">"2021-01-01 00:00:00"<span className="char">,</span></span><br/>
                                        <span className="attribute ml-5">"intervenant_id"</span><span className="char">: </span><span className="value">"1"<span className="char">,</span></span><br/>
                                        <span className="attribute ml-5">"activite_code"</span><span className="char">: </span><span className="value">"A"<span className="char">,</span></span><br/>
                                        <span className="attribute ml-5">"machine_code"</span><span className="char">: </span><span className="value">"DECHIQ23"<span className="char">,</span></span><br/>
                                        <span className="attribute ml-5">"cause_defaut_code"</span><span className="char">: </span><span className="value">"BLOQUE"<span className="char">,</span></span><br/>
                                        <span className="attribute ml-5">"cause_objet_code"</span><span className="char">: </span><span className="value">"ALIMENTATI"<span className="char">,</span></span><br/>
                                        <span className="attribute ml-5">"symptome_defaut_code"</span><span className="char">: </span><span className="value">"ALLUME0"<span className="char">,</span></span><br/>
                                        <span className="attribute ml-5">"symptome_objet_code"</span><span className="char">: </span><span className="value">"ACCUMULATE"<span className="char">,</span></span><br/>
                                    <span className="char ml-4">&#125;,</span> <br/>
                                    <span className="char ml-4">&#123;</span> <br/>
                                        <span className="comment ml-5">// Autres interventions</span> <br/>
                                    <span className="char ml-4">&#125;</span> <br/>
                                <span className="char">]</span>
                            </code>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="min-vh-100 d-flex justify-content-center align-items-center flex-column text-break flex-wrap">
                <h3 className="title text-center my-5" style={{ color: '#43BC90'}}>Insertion d'une intervention</h3>
                <div className="d-flex justify-content-center align-items-center text-break flex-wrap">
                    <div className="m-3 img-wrapper">
                        <img style={ imgStyle } className="mockup-img" alt="Application Mockup" src={ connexionPage } />
                        <h5 className="mt-3 comment text-center">/* Insertion d'une intervention */</h5>
                    </div>
                    <div className="m-3 d-flex flex-column flex-wrap content text-break">
                        <p style={{ fontSize: "1.4rem" }} className="description">
                            Cette section permet l'ajout d'une intervention dans la base de donnée. <br/><br/>
                            Les différents menu déroulants sont remplis avec les données renvoyées par le serveur web. <br/><br/>
                            Après l'envoie du formulaire, l'API renvoie un code HTTP : 
                            <ul>
                                <li>200 : L'insertion s'est bien passée.</li>
                                <li>400 : Requête incorrecte.</li>
                                <li>500 : Erreur sur l'API.</li>
                                <li>504 : Aucune réponse de l'API.</li>
                            </ul>
                            <br/>
                            Le serveur web se charge ensuite de filtrer les paramètres et les insère dans la base de données. <br/> <br/>
                            Si l'insertion s'est déroulée sans problème, l'application retourne à la page d'accueil et met à jour la liste des interventions.
                        </p>
                    </div>

                    <div className="snippet">
                        <h4 className="mt-3">Requête cURL :</h4>
                        <div className="code-section p-3">
                            <code className="code">
                                <span className="char">GET -</span> <span className="str">http://sio.jbdelasalle.com/~mchambon/gmagro-android/ws.php?</span>uc=insertIntervention<span className="attribute">&amp;mail=mailIntervenant&amp;password=motDePasseIntervenant</span>
                            </code>
                        </div>

                        <h4 className="mt-3">Requête SQL :</h4>
                        <div className="code-section p-3 mt-3">
                            <code className="code">
                                <span className="char">SQL -</span> <span className="attribute">SELECT</span> * <span className="attribute">FROM</span> intervenant <span className="attribute">WHERE</span> mail = :mail <span className="attribute">AND</span> password = <span className="str">md5(</span>:password<span className="str">)</span><span className="char">;</span>
                            </code>
                        </div>

                        <h4 className="mt-3">Réponse :</h4>
                        <div className="code-section p-3">
                            <code className="code">
                                <span className="attribute">HTTP 200</span> <span className="comment">// OK</span> <br/>
                                <span className="attribute">HTTP 400</span> <span className="comment">// Bad Request</span> <br/>
                                <span className="attribute">HTTP 500</span> <span className="comment">// Internal Server Error</span> <br/>
                                <span className="attribute">HTTP 504</span> <span className="comment">// Gateway Timeout</span> <br/>
                            </code>
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-vh-100 d-flex justify-content-center align-items-center flex-column text-break flex-wrap">
                <h3 className="title text-center mb-5" style={{ color: '#43BC90'}}>Mise à jour d'une intervention</h3>
                <div className="d-flex justify-content-center align-items-center text-break flex-wrap">
                    <div className="m-3 d-flex flex-column flex-wrap content text-break">
                        <p style={{ fontSize: "1.4rem" }} className="description">
                            Cette page sert à mettre à jour une intervention. <br/><br/>
                            Elle permet d'ajouter un nouvel intervenant sur l'intervention et d'ajouter un nouveau commentaire. <br/><br/>
                            La modification se déroule comme pour l'insertion, seule la requête SQL change. Le système de gestion d'erreur est le même et la requête est gérée de la même manière par l'API.
                        </p>
                    </div>
                    <div className="m-3 img-wrapper">
                        <img style={ imgStyle } className="mockup-img" alt="Application Mockup" src={ connexionPage } />
                        <h5 className="mt-3 comment text-center">/* Mise à jour d'une intervention */</h5>
                    </div>
                </div>
            </div>

            <div className="min-vh-100 d-flex justify-content-center align-items-center flex-column text-break flex-wrap">
                <h3 className="title text-center mb-5" style={{ color: '#43BC90'}}>API &amp; Serveur Web</h3>
                <div className="d-flex justify-content-center align-items-center text-break flex-wrap">
                    <div className="m-3 d-flex flex-column flex-wrap content text-break">
                        <p style={{ fontSize: "1.4rem" }} className="description">
                            L'application est reliée à une API développée en PHP et disponible sur le serveur web du lycée. <br/>
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
