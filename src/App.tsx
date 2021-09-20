import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Home = lazy(() => import('./page/Home'));

function App() {
    return (
        <Switch>
            <Route exact path="/">
                <Suspense fallback={<></>}>
                    <Home />
                </Suspense>
            </Route>
            <Route path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
    );
}

export default App;
