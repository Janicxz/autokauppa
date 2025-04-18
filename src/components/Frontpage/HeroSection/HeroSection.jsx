import styles from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <div className={styles.heroContainer}>
            { /* Hero background image and header text*/}
            <div className={styles.heroImageContainer}>
                <div className={styles.heroHeaderContainer}>
                    <h1>Tervetuloa ostoksille autokauppaamme!</h1>
                </div>
            </div>
            { /* Hero main text */}
            <div className={styles.heroTextContainer}>
                <div className={styles.heroText}>
                    <h2>Autokauppa oy</h2>
                    <p>Olemme Lieksassa sijaitseva autoliike, joka tarjoaa monipuolisen valikoiman uusia ja käytettyjä ajoneuvoja. Asiantunteva henkilökuntamme on sitoutunut avustamaan asiakkaitamme löytämään heidän tarpeitaan vastaavan ratkaisun. Toivotamme teidät tervetulleiksi tutustumaan tarjontaamme.</p>
                </div>
            </div>
        </div>
    );
}
export default HeroSection;