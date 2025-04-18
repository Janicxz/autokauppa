import styles from './Footer.module.css';

const Footer = () => {
    const socialMediaLinks = {
        twitter: 'https://twitter.com/',
        facebook: 'https://www.facebook.com/',
        nettiauto: 'https://www.nettiauto.com/'
    }

    return (
        <footer className={styles.footer}>
            <p><a href={socialMediaLinks["twitter"]}>Twitter</a> <a href={socialMediaLinks["facebook"]}>Facebook</a> <a href={socialMediaLinks["nettiauto"]}>Nettiauto</a></p>
            <p>Autokauppa. Made by Jani Luostarinen 2025.</p>
        </footer>
    );
}
export default Footer;