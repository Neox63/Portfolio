import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "../Sections/404/NotFound.jsx";
import Home from './Home.jsx';
import EFour from './EFour.jsx';
import GmagroWeb from "../Project/GmagroWeb.jsx";
import GmagroJava from "../Project/GmagroJava.jsx";
import GmagroAndroid from "../Project/GmagroAndroid.jsx";

const App = () => {
    return (
        <Router>
            <Switch>   
                <Route exact path="/" component={ Home } />
                <Route exact path="/e4" component={ EFour } />
                <Route path="/e4/gmagro-web" component={ GmagroWeb } />
                <Route path="/e4/gmagro-desktop" component={ GmagroJava } />
                <Route path="/e4/gmagro-android" component={ GmagroAndroid } />
                <Route component={ NotFound } />
            </Switch>
        </Router>
    )
}

export default App;