import styles from './CarCard.module.css';
import { Link } from 'react-router-dom';

const CarCard = ({carData}) => {
    return (
        <Link to={'/cars?id=1'}>
        <div className={styles.CarCard}>
            <img src="https://placehold.co/250x150" alt=""></img>
            <div className={styles.CarCardText}>
                <h3>{carData.name}</h3>
                <p>{carData.description}</p>
                <p>{carData.price} €</p>
            </div>
        </div>
        </Link>
    );
}
export default CarCard;