import CarsContainer from '../CarsList/CarsContainer';
import styles from './OnSalePage.module.css';

const OnSalePage = () => {
    return (
        <div className={styles.OnSaleContainer}>
            <h2>Myynnissä olevat autot</h2>
            <CarsContainer />
        </div>
    );
}
export default OnSalePage;