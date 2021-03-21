import { Link } from 'react-router-dom';

const EFourCard = ({ title, path, image, color}) => {

    const imgStyle = {
        borderRadius: "15px",
        filter: `drop-shadow(0 0 0.25rem ${ color })`
    }

    return (
        <div className="project-card m-3">
            <Link to={ `e4/${path}` }>
                <div className="btn">
                    <img style={ imgStyle } src={ image } alt="application mockup"/>
                    <h2 style={{ color: '#43BC90'}} className="text-center mt-3">&lt;{ title } /&gt;</h2>
                </div>
            </Link>
        </div>
    )
}

export default EFourCard;


// 

// <Link to="e4/gmagro-desktop">Trop bien lé pécé ^^</Link>

// <Link to="e4/gmagro-android">Trop bien les tailéphone</Link>