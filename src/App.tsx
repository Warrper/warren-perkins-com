import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Home = lazy(() => import('./page/Home'));

function App() {
    return (
        <Suspense fallback={<></>}>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Suspense>
    );
}

export default App;
