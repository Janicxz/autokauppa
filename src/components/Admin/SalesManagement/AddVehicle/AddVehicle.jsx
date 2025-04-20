import styles from './AddVehicle.module.css';
import axios from 'axios';
import { useState } from 'react';

import { API_URL } from '../../../../config/config';

const AddVehicle = ({ onClose, editMode, carData }) => {
    const [formData, setFormData] = useState ({
        name: carData ? carData.name : "",
        description: carData ? carData.description : "",
        bodyStyle: carData ? carData.bodyStyle : "",
        odometer: carData ? carData.odometer : "",
        transmission: carData ? carData.transmission: "",
        registrationDate: carData ? carData.registrationDate : null,
        passedInspection: carData ? carData.passedInspection : false,
        inspectionDate: carData ? carData.inspectionDate : null,
        registrationNumber: carData ? carData.registrationNumber : "",
        price: carData ? carData.price : "",
    });
    
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
        return false;
    }

    const postAddVehicle = async (e) => {
        try {
            const response = await axios.post(API_URL + "/addVehicle", new FormData(e.target));
            alert("Ajoneuvon myynti-ilmoitus lisättiin onnistuneesti.");
            onClose();
        } catch (error) {
            alert("Ajoneuvon myynti-ilmoitusta ei voitu lisätä.\nTarkista, että syötit vaaditut tiedot oikein.");
        }
    }
    const putEditVehicle = async(e) => {
        if (!carData) {
            alert("Muokattavan ilmoituksen id on virheellinen.");
            return;
        }
        try {
            const response = await axios.put(API_URL + "/editVehicle/", new FormData(e.target));
            alert("Ajoneuvon myynti-ilmoitus lisättiin onnistuneesti.");
            onClose();
        } catch (error) {
            alert("Ajoneuvon myynti-ilmoitusta ei voitu lisätä.\nTarkista, että syötit vaaditut tiedot oikein.");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        editMode ? putEditVehicle(e) : postAddVehicle(e);
        return false;
    }
    
    return (
        <div className={styles.AddVehicleBackground}>
            <div className={styles.AddVehicle}>
                    <h3>{editMode ? "Muokkaa ilmoituksen tietoja" : "Lisää myytävä ajoneuvo"}</h3>
                    <form action={API_URL + "/addVehicle"} onSubmit={handleSubmit} method='POST'>
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