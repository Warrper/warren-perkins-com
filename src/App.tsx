import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('./page/Home'));
const NotFound = lazy(() => import('./page/NotFound'));

function App() {
    return (
        <Suspense fallback={<></>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </Suspense>
    );
}

export default App;
