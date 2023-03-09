import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.container}>
        <Link to="/">
        <p>Home</p>
        </Link>
        <Link to="/productos">
        <p>Productos</p>
        </Link>
        <Link to="/contacto">
        <p>Contacto</p>
        </Link>
    </nav>
  )
}

export default Navbar