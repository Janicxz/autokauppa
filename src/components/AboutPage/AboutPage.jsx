import styles from './AboutPage.module.css';
const AboutPage = () => {
    return (
        <div className={styles.AboutPage}>
            <h2>Yhteystiedot</h2>
            <h3>Autokauppa Oy</h3>
            <p>Puh: <a href="tel:1231231234">123 123 1234</a></p>
            <p>Osoite: katu 123 Lieksa 81700</p>
            <p>Sähköposti: <a href="mailto:myynti@testi.fi">myynti@testi.fi</a></p>
            <div className={styles.AboutMap}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1267.0393247931581!2d30.020430476152832!3d63.319905478103585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfi!2sfi!4v1745182434026!5m2!1sfi!2sfi"
                width="100%"
                height="450"
                frameBorder="0"
                allowFullscreen=""
                aria-hidden="false"
                tabIndex="0"
            />
            </div>
        </div>
    );
}
export default AboutPage;