import styles from './PageNavigation.module.css';
import { Link, useNavigate } from 'react-router-dom';

const PageNavigation = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    }
    return (
        <div className={styles.PageNavigation}>
            <Link onClick={handleBackClick}>Palaa edelliselle sivulle</Link>
        </div>
    );
}
export default PageNavigation;