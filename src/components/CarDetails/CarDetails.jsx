import styles from './CarDetails.module.css';
import { API_URL } from '../../config/config.js';
import axios from 'axios';
import { useState, useEffect } from 'react';

const CarDetails = () => {
    const [state, setState] = useState({
        carDetails: {},
        loading: true,
        error: false
    });
    // On init
    useEffect(() => {
        const getCarDetails = async (carId) => {
            let carDetail = {};
            let apiError = false;
            let errorMsg = '';
            console.log(`Getting car details: ${carId}`);
            try {
                const res = await axios.get(API_URL + '/carDetails/' + carId);
                carDetail = res.data[0];
                console.log("Got car details: " + carDetail);
            } catch (error) {
                console.error('Error fetching cars:', error);
                apiError = true;
                errorMsg = 'Virhe auton tietojen lataamisessa.';
            }
            setState(prevState => ({ ...prevState, loading: false, carDetails: carDetail, error: apiError, errorMessage: errorMsg }));
        }
        let carId = new URLSearchParams(window.location.search).get('id');
        carId = parseInt(carId);

        if (isNaN(carId)) {
            console.log("Invalid carId");
            setState(prevState => ({...prevState, loading: false, error: true}));
        }

        getCarDetails(carId);
    }, []);

    if (state.error) {
        return (
            <div className={styles.CarDetails}>
                <p>Auton tietoja ei löytynyt. Tarkista, että linkki on oikein.</p>
            </div>
        );
    }
    if (state.loading) {
        return (
            <div className={styles.CarDetails}>
                <p>Haetaan tietoja...</p>
            </div>
        );
    }
    return (
        <div className={styles.CarDetails}>
            <div className={styles.carDetailsLeft}>
                <img src="https://placehold.co/400x400"></img>
            </div>
            <div className={styles.carDetailsRight}>
                <h2>{state.carDetails.name}</h2>
                <p>{state.carDetails.description}</p>
                {state.carDetails.bodyStyle && <p>Korimalli: {state.carDetails.bodyStyle}</p>}
                {state.carDetails.inspectionDate && <p>Rekisteröity: {new Date(state.carDetails.registrationDate).toLocaleDateString()}</p>}
                {state.carDetails.inspectionDate && <p>Katsastettu: {new Date(state.carDetails.inspectionDate).toLocaleDateString()}</p>}
                {state.carDetails.odometer && <p>Mittarilukema: {state.carDetails.odometer} km</p>}
                {state.carDetails.transmission && <p>Vaihteisto: {state.carDetails.transmission}</p>}
                {state.carDetails.registrationNumber && <p>Rekisterinumero: {state.carDetails.registrationNumber}</p>}
                {state.carDetails.price && <p>Hinta: {state.carDetails.price} €</p>}
            </div>
        </div>
    );
}
export default CarDetails;