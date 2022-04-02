import { FunctionalComponent } from 'preact';
import { Link } from 'react-router-dom';
import { NotFoundWrapper } from './index.css';

interface NotFoundProps {}

const NotFound: FunctionalComponent<NotFoundProps> = () => {
    return (
        <NotFoundWrapper>
            404 not found <Link to="/">Return Home</Link>
        </NotFoundWrapper>
    );
};

export default NotFound;
