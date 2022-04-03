import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './page/Home';
const Blog = lazy(() => import('./page/Blog'));
const Projects = lazy(() => import('./page/Projects'));
const Contact = lazy(() => import('./page/Contact'));
const NotFound = lazy(() => import('./page/NotFound'));

function App() {
    return (
        <Suspense fallback={<></>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </Suspense>
    );
}

export default App;
