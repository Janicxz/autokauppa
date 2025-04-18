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
                <p>tekstiä</p>
            </div>
        </div>
    );
}
export default HeroSection;