import { FunctionalComponent } from 'preact';
import { HeaderWrapper } from './index.css';
import { Link } from 'react-router-dom';
import HomeIcon from '../../assets/icons/HomeIcon';

interface HeaderProps {
    currentPage?: string;
}

const Header: FunctionalComponent<HeaderProps> = ({ currentPage }) => {
    return (
        <HeaderWrapper>
            {currentPage !== 'home' ? (
                <div className="home">
                    <Link to="/">
                        <HomeIcon />
                    </Link>
                </div>
            ) : null}
            <div className={`current-page-${currentPage}`}>
                <ul>
                    <li className={`${currentPage === 'blog' ? 'active' : ''}`}>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className={`${currentPage === 'projects' ? 'active' : ''}`}>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <a href="https://github.com/warrper">Github</a>
                    </li>
                    <li className={`${currentPage === 'contact' ? 'active' : ''}`}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </HeaderWrapper>
    );
};

export default Header;
