import Container from "../../Container/Container"

const Annexe = ({ fiche, prod, apk, repo }) => {
    return (
        <div className="d-flex justify-content-center m-3">
            <div className="d-flex flex-column text-center">
                <h3 style={{ color: '#43BC90'}} className="title mt-5 mb-3">Documents Annexes</h3>
                <Container>
                    <a download href={ fiche } className="btn btn-outline-info m-3">Télécharger la fiche E4</a>
                    <a target="_blank" rel="noopener noreferrer" href={ repo } className="btn btn-outline-info m-3">Code Source</a>
                    { (apk) ? (<a download href={ apk } className="btn btn-outline-info m-3">Télécharger l'APK</a>) : ('') }
                    { (prod) ? (<a download href={ prod } className="btn btn-outline-info m-3">Démo</a>) : ('') }
                </Container>
            </div>
        </div>
    )
}

export default Annexe;
