import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-vh-100 text-center d-flex justify-content-center align-items-center flex-column">
            <h1 style={{ color: '#43BC90'}} className="text-center">&lt;404 Not Found /&gt;</h1>
            <h4>We have searched accross all the server, but we could not find this page :/</h4>
            <Link to="/">Well, bring me back home...</Link>
        </div>
    )
}

export default NotFound;
