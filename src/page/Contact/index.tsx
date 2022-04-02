import { FunctionComponent } from 'preact';
import Header from '../../components/Header';
import { ContactWrapper } from './index.css';

interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = () => {
    return (
        <ContactWrapper>
            <Header currentPage="contact" />
            <h1>Contact</h1>
        </ContactWrapper>
    );
};

export default Contact;
