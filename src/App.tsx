import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
    return (
        <Switch>
            <Route exact path="/">
                <h1>Home</h1>
            </Route>
            <Route path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
    );
}

export default App;
