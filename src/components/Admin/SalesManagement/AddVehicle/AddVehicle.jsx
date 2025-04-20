import styles from './AddVehicle.module.css';

import { API_URL } from '../../../../config/config';
const AddVehicle = ({ onClose }) => {
    
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
        return false;
    }
    
    return (
        <div className={styles.AddVehicleBackground}>
            <div className={styles.AddVehicle}>
                    <h3>Lisää myytävä ajoneuvo</h3>
                    <form action={API_URL + "/addVehicle"} method='POST'>
                        <label htmlFor='name'>Nimi:</label>
                        <input type='text' name='name'></input>

                        <label htmlFor='bodyStyle'>Korimalli:</label>
                        <input type='text' name='bodyStyle'></input>

                        <label htmlFor='odometer'>Mittarilukema:</label>
                        <input type='number' name='odometer'></input>
                        <label htmlFor='transmission'>Vaihteisto:</label>
                        <input type='text' name='transmission'></input>

                        <label htmlFor='registrationDate'>Ensirekisteröinti pvm:</label>
                        <input type='date' name='registrationDate'></input>
                        <div>
                            <label htmlFor='passedInspection'>Katsastettu: </label>
                            <input type='checkbox' name='passedInspection'></input>
                        </div>
                        <label htmlFor='inspectionDate'>Katsastus pvm:</label>
                        <input type='date' name='inspectionDate'></input>

                        <label htmlFor='registrationNumber'>Rekisterinumero:</label>
                        <input type='text' name='registrationNumber'></input>

                        <label htmlFor='description'>Lisätietoja:</label>
                        <textarea rows='7' name='description'></textarea>

                        <label htmlFor='price'>Hinta €:</label>
                        <input type='number' name='price'></input>
                        <div className={styles.AddVehicleButtons}>
                            <button>Lähetä</button>
                            <button onClick={handleCloseClick}>Sulje</button>
                        </div>
                    </form>
            </div>
        </div>
    );
}
export default AddVehicle;