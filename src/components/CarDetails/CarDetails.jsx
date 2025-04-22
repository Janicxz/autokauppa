import styles from './CarDetails.module.css';
import { API_URL } from '../../config/config.js';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { UserContext } from '../../hooks/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import  AddVehicle  from '../Admin/SalesManagement/AddVehicle/AddVehicle.jsx';

const CarDetails = () => {
    // Get user state from context (logged in status)
    const { userState, setUserState } = useContext(UserContext);
    const navigate = useNavigate();
    // Initialize state
    const [state, setState] = useState({
        carDetails: {},
        carId: 0,
        loading: true,
        editCarDetails: false,
        error: false
    });
    const fetchCarDetails = async(carId) => {
        let carDetail = {};
        let apiError = false;
        let errorMsg = '';
        try {
            const res = await axios.get(API_URL + '/carDetails/' + carId);
            carDetail = res.data[0];
            //console.log("Got car details: " + carDetail);
        } catch (error) {
            //console.error('Error fetching cars:', error);
            apiError = true;
            errorMsg = 'Virhe auton tietojen lataamisessa.';
        }
        setState(prevState => ({ ...prevState, loading: false, carDetails: carDetail, carId: carId, error: apiError, errorMessage: errorMsg }));
    }
    // On mount attempt to get car details from backend via API
    useEffect(() => {
        const getCarDetails = async (carId) => {
            fetchCarDetails(carId);
        }
        let carId = new URLSearchParams(window.location.search).get('id');
        carId = parseInt(carId);

        if (isNaN(carId)) {
            console.log("Invalid carId");
            setState(prevState => ({...prevState, loading: false, error: true}));
            return;
        }

        getCarDetails(carId);
    }, []);
    // Handle delete button click
    const handleDelete = async () => {
        try {
            const res = await axios.delete(API_URL + '/deleteCar/' + state.carId);
            alert("Ilmoitus poistettiin onnistuneesti.");
            navigate('/onsale');
        } catch (error) {
            alert("Ilmoituksen poistaminen epäonnistui.");
        }
    }

    const handleEdit = () => {
        setState(prevState => ({...prevState, editCarDetails: true}));
    }
    const handleEditClose = () => {
        setState(prevState => ({...prevState, editCarDetails: false}));
        fetchCarDetails(state.carId);
    }

    // Display errors
    if (state.error) {
        return (
            <div className={styles.CarDetails}>
                <p>Auton tietoja ei löytynyt. Tarkista, että linkki on oikein.</p>
            </div>
        );
    }
    // Show loading spinner
    if (state.loading) {
        return (
            <div className={styles.CarDetails}>
                <p>Haetaan tietoja...</p>
            </div>
        );
    }
    // Return details if everything is ok
    return (
        <div className={styles.CarDetails}>
            {state.editCarDetails && <AddVehicle onClose={handleEditClose} editMode={true} carData={state.carDetails} carId={state.carId}/>}
            <div className={styles.carDetailsLeft}>
                <img src="https://placehold.co/400x400"></img>
            </div>
            <div className={styles.carDetailsRight}>
                <h2>{state.carDetails.name}</h2>
                <p>{state.carDetails.description}</p>
                {state.carDetails.body_style_name && <p>Korimalli: {state.carDetails.body_style_name}</p>}
                {state.carDetails.inspectionDate && <p>Ensirekisteröity: {new Date(state.carDetails.registrationDate).toLocaleDateString()}</p>}
                {state.carDetails.inspectionDate && <p>Katsastettu: {new Date(state.carDetails.inspectionDate).toLocaleDateString()}</p>}
                {state.carDetails.odometer > 0 && <p>Mittarilukema: {state.carDetails.odometer} km</p>}
                {state.carDetails.transmission_name && <p>Vaihteisto: {state.carDetails.transmission_name}</p>}
                {state.carDetails.registrationNumber && <p>Rekisterinumero: {state.carDetails.registrationNumber}</p>}
                {state.carDetails.price && <p>Hinta: {state.carDetails.price} €</p>}
                {<div className={styles.carDetailsButtons}>
                    {/*userState.loggedIn &&*/ <button onClick={handleEdit}>Muokkaa ilmoitusta</button>}
                    {/*userState.loggedIn &&*/ <button onClick={handleDelete}>Poista ilmoitus</button>}
                </div>}
            </div>
        </div>
    );
}
export default CarDetails;