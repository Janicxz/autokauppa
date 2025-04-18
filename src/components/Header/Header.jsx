import styles from './Header.module.css';
import { Link  } from 'react-router-dom';

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <img src="https://placehold.co/250x80" alt=""></img>
                <nav className={styles.headerNavBar}>
                    <ul>
                        <li ><Link to="/">Etusivu</Link></li>
                        <li ><Link to="/onsale">Myynnissä olevat autot</Link></li>
                        <li ><Link to="/about">Tietoa meistä</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.headerRight}>
                <p><b>Autokauppa Oy</b></p>
                <p><a href="tel:1231231234">123 123 1234</a></p>
                <br></br>
                <p>Osoite 123</p>
                <p><a href="mailto:myynti@testi.fi">myynti@testi.fi</a></p>
            </div>
        </header>
    );
}
export default Header;