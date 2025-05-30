import styles from './CarCard.module.css';
import { Link } from 'react-router-dom';

const CarCard = ({carData}) => {
    return (
        <Link to={'/cars?id=' + carData.id} className={styles.CarCardLink}>
        <div className={styles.CarCard}>
            <img src="https://placehold.co/250x150" alt=""></img>
            <div className={styles.CarCardText}>
                <h3>{carData.name} | {new Date(carData.registrationDate).getFullYear()}</h3>
                <p>{carData.body_style_name}, {carData.transmission_name}</p>
                <p>{carData.odometer} km</p>
                <p>{carData.price} €</p>
            </div>
        </div>
        </Link>
    );
}
export default CarCard;