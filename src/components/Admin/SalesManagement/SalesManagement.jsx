import styles from './SalesManagement.module.css';
import { UserContext } from '../../../hooks/UserContext';
import { useContext } from 'react';
import { useState } from 'react';
import AddVehicle from './AddVehicle/AddVehicle';
const SalesManagement = () => {
    const { userState, setUserState } = useContext(UserContext);
    const [ state, setState ] = useState({
        addVehicleFormVisible: false
    });


    const handleLoginClick = () => {
        setUserState(prevState => ({...prevState, loggedIn: true}));
    }
    const handleAddCarClick = () => {
        setState(prevState => ({...prevState, addVehicleFormVisible: true}));
    }
    const handleCloseForm = () => {
        setState(prevState => ({...prevState, addVehicleFormVisible: false}));
    }

    return(
        <div className={styles.SalesManagement}>
            <h2>Myynti-ilmoitustenhallinta</h2>
            {state.addVehicleFormVisible && <AddVehicle onClose={handleCloseForm}/>}
            <button className={styles.addCarButton} onClick={handleAddCarClick}>Lisää Myytävä auto</button>
            {!userState.loggedIn && <button className={styles.addCarButton} onClick={handleLoginClick}>Login</button>}
        </div>
    );
}
export default SalesManagement;