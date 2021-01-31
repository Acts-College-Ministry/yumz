import React, { useEffect } from 'react';

const SessionContext = React.createContext(null);

const withSession = Component => {

        console.log(sessionStorage.getItem('user'));
        const user = JSON.parse(sessionStorage.getItem("user"));

    return (
    <SessionContext.Consumer value={user}>
        <Component />
    </SessionContext.Consumer>)
}

export default withSession;