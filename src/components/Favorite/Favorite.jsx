import { Link } from 'react-router-dom';
import styles from './Favorite.module.css';

import icon from './img/bookmark.svg'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Favorite = () => {
    const [count, setCount] = useState();

    const storeDate = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        const length = Object.keys(storeDate).length;
        length.toString.length > 2 ? setCount('...') : setCount(length);
    });

    return (
        <div className={styles.container}>
            <Link to="/favorites" >
                <div className={styles.content}>
                    <span className={styles.text}>Избранное</span>
                    <span className={styles.counter}>{count}</span>
                    <img className={styles.icon} src={icon} alt='Favorite' />
                </div>
            </Link>
        </div>
    )
}

export default Favorite;