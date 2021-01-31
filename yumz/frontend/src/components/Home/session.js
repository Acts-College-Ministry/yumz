import React from 'react';

const SessionContext = React.createContext(null);

export const withSession = Component => props => (
    <LocationContext.Consumer>
        {user => <Component {...props} user={user}/>}
    </LocationContext.Consumer>
)

export default SessionContext;