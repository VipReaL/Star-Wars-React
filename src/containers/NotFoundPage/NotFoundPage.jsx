import img from './img/404.png';

import { useLocation } from 'react-router';

import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {

    let location = useLocation();

    return (
        <>
            <img className={styles.img} src={img} alt="Not Found" />
            <p className={styles.text}>No match for</p>
            <ul className={styles.text}>{location.pathname}</ul>
        </>
    )
}

export default NotFoundPage;