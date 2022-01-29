import { FunctionalComponent } from 'preact';
import { HeaderWrapper } from './index.css';
import { Link } from 'react-router-dom';

interface HeaderProps {}

const Header: FunctionalComponent<HeaderProps> = () => {
    return (
        <HeaderWrapper>
            <div className="left">
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </div>
            {/* <div className="center">Warren Perkins</div> */}
            <div className="right">
                <ul>
                    <li>
                        <a href="https://github.com/warrper">Github</a>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </HeaderWrapper>
    );
};

export default Header;
