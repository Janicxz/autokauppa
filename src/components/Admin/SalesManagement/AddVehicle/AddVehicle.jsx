import styles from './AddVehicle.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { API_URL } from '../../../../config/config';

const AddVehicle = ({ onClose, editMode, carData, carId }) => {
    const [formData, setFormData] = useState ({
        name: carData ? carData.name : "",
        description: carData ? carData.description : "",
        bodyStyle: carData ? carData.bodyStyle : "",
        odometer: carData ? carData.odometer : "",
        transmission: carData ? carData.transmission: "",
        registrationDate: carData ? carData.registrationDate.slice(0, 10) : "",
        passedInspection: carData ? carData.passedInspection : false,
        inspectionDate: carData ? carData.inspectionDate.slice(0, 10) : "",
        registrationNumber: carData ? carData.registrationNumber : "",
        price: carData ? carData.price : "",
    });
    const [bodyStyles, setBodyStyles] = useState([]);
    const [transmissions, setTransmissions] = useState([]);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
        return false;
    }
    // On mount
    useEffect(() => {
        const getBodyStyles = async () => {
            try {
                const res = await axios.get(API_URL + '/bodystyles');
                setBodyStyles(res.data);
               //console.log("Got bodystyles: " + res.data);
            } catch (err) {
                console.log("Error fetching bodystyles" + err);
                return;
            }
        }
        const getTransmissions = async () => {
            try {
                const res = await axios.get(API_URL + '/transmissions');
                setTransmissions(res.data);
                //console.log("Got transmissions: " + res.data);
            } catch (err) {
                console.log("Error fetching transmissions" + err);
                return;
            }
        }
        getBodyStyles();
        getTransmissions();
    }, []);

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
        if (isNaN(carId) || carId <= 0) {
            console.log("CarId is invalid");
            return;
        }
        try {
            const response = await axios.put(API_URL + "/editVehicle/" + carId, new FormData(e.target));
            onClose();
        } catch (error) {
            alert("Ajoneuvon myynti-ilmoitusta ei voitu muokata.\nTarkista, että syötit vaaditut tiedot oikein.");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        editMode ? putEditVehicle(e) : postAddVehicle(e);
        return false;
    }

    return (
        <>
        <div className={styles.AddVehicleBackground}> </div>
        <div className={styles.AddVehicleContainer}>
            <div className={styles.AddVehicle}>
                    <h3>{editMode ? "Muokkaa ilmoituksen tietoja" : "Lisää myytävä ajoneuvo"}</h3>
                    <form action={API_URL + "/addVehicle"} onSubmit={handleSubmit} method='POST'>
                        <label htmlFor='name'>Nimi:</label>
                        <input type='text' name='name' value={formData.name} onChange={(e) => {setFormData({...formData, name: e.target.value})}}></input>

                        <label htmlFor='bodyStyle'>Korimalli:</label>
                        <input type='text' name='bodyStyle' value={formData.bodyStyle} onChange={(e) => {setFormData({...formData, bodyStyle: e.target.value})}}></input>

                        <label htmlFor='odometer'>Mittarilukema:</label>
                        <input type='number' name='odometer' value={formData.odometer} onChange={(e) => {setFormData({...formData, odometer: e.target.value})}}></input>
                        {/* TODO: Add <select> here for transmission and bodystyle dropdown select. change transmission to transmission_name.
                        select by transmissions.map => (), show <option value={transmissions.id}>{transmissions.name}</option>*/}
                        <label htmlFor='transmission'>Vaihteisto:</label>
                        <input type='text' name='transmission' value={formData.transmission} onChange={(e) => {setFormData({...formData, transmission: e.target.value})}}></input>

                        <label htmlFor='registrationDate'>Ensirekisteröinti pvm:</label>
                        <input type='date' name='registrationDate' value={formData.registrationDate} onChange={(e) => {setFormData({...formData, registrationDate: e.target.value})}}></input>
                        <div>
                            <label htmlFor='passedInspection'>Katsastettu: </label>
                            <input type='checkbox' name='passedInspection' value={formData.passedInspection} onChange={(e) => {setFormData({...formData, passedInspection: e.target.value})}}></input>
                        </div>
                        <label htmlFor='inspectionDate'>Katsastus pvm:</label>
                        <input type='date' name='inspectionDate' value={formData.inspectionDate} onChange={(e) => {setFormData({...formData, inspectionDate: e.target.value})}}></input>

                        <label htmlFor='registrationNumber'>Rekisterinumero:</label>
                        <input type='text' name='registrationNumber' value={formData.registrationNumber} onChange={(e) => {setFormData({...formData, registrationNumber: e.target.value})}}></input>

                        <label htmlFor='description'>Lisätietoja:</label>
                        <textarea rows='7' name='description' value={formData.description} onChange={(e) => {setFormData({...formData, description: e.target.value})}}></textarea>

                        <label htmlFor='price'>Hinta €:</label>
                        <input type='number' name='price' value={formData.price} onChange={(e) => {setFormData({...formData, price: e.target.value})}}></input>
                        <div className={styles.AddVehicleButtons}>
                            <button>Lähetä</button>
                            <button onClick={handleCloseClick}>Sulje</button>
                        </div>
                    </form>
            </div>
        </div>
        </>
    );
}
export default AddVehicle;