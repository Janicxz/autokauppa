import styles from './SalesManagement.module.css';
import { UserContext } from '../../../hooks/UserContext';
import { useContext } from 'react';
import { useState } from 'react';

const SalesManagement = () => {
    const { userState, setUserState } = useContext(UserContext);
    const [ state, setState ] = useState({
        addVehicleVisible: false
    });


    const handleLoginClick = () => {
        setUserState(prevState => ({...prevState, loggedIn: true}));
    }
    const handleAddCarClick = () => {
        setState(prevState => ({...prevState, addVehicleVisible: true}));
    }

    return(
        <div className={styles.SalesManagement}>
            <h2>Myynti-ilmoitustenhallinta</h2>

            <button className={styles.addCarButton} onClick={handleAddCarClick}>Lisää Myytävä auto</button>
            {!userState.loggedIn && <button className={styles.addCarButton} onClick={handleLoginClick}>Login</button>}
        </div>
    );
}
export default SalesManagement;