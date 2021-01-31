import React, { useState } from 'react';

const SessionContext = React.createContext(null);

const withSession = Component => {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));

    return (
    <SessionContext.Consumer value={{ user: [user, setUser] }}>
        <Component {...props}/>
    </SessionContext.Consumer>)
}

export default withSession;