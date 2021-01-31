import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import LandingPage from '../Landing';
import HomePage from '../Home';
import AboutPage from '../About';

import * as ROUTES from '../../constants/routes';

const App = () => {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path={ROUTES.LANDING} component={LandingPage} />
                    <Route path={ROUTES.HOME} component={HomePage} />
                    <Route path={ROUTES.ABOUT} component={AboutPage} />
                    <Redirect from='/' to={ROUTES.LANDING} />
                </Switch>
            </Router>
        </React.Fragment>
        )
}

export default App;