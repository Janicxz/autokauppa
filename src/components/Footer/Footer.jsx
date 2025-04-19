import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const socialMediaLinks = {
        twitter: 'https://twitter.com/',
        facebook: 'https://www.facebook.com/',
        nettiauto: 'https://www.nettiauto.com/'
    }

    return (
        <footer className={styles.footer}>
            <a href={socialMediaLinks["nettiauto"]}>Nettiauto</a>
            <a href={socialMediaLinks["twitter"]}><FontAwesomeIcon icon={faSquareTwitter} size="2x"/></a>
            <a href={socialMediaLinks["facebook"]}><FontAwesomeIcon icon={faSquareFacebook} size="2x" /></a>
            <p>Autokauppa. Made by Jani Luostarinen 2025.</p>
        </footer>
    );
}
export default Footer;