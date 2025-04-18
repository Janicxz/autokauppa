import styles from './Frontpage.module.css';
import CarsContainer from './CarsContainer/CarsContainer';
import HeroSection from './HeroSection/HeroSection';


const Frontpage = () => {
    return (
        <div className={styles.frontPageContainer}>
            <HeroSection />
            <CarsContainer />
        </div>
    );
}
export default Frontpage;