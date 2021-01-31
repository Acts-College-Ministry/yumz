import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { makeStyles } from '@material-ui/core'

import LandingPage from '../Landing';
import HomePage from '../Home';
import AboutPage from '../About';

import * as ROUTES from '../../constants/routes';

const useStyles = makeStyles((theme) => ({

}))

const App = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Router>
                <div>
                    <Switch>
                        <Route exact path={ROUTES.LANDING} component={LandingPage} />
                        <Route path={ROUTES.HOME} component={HomePage} />
                        <Route path={ROUTES.ABOUT} component={AboutPage} />
                    </Switch>
                </div>
            </Router>
        </React.Fragment>
        )
}

export default App;