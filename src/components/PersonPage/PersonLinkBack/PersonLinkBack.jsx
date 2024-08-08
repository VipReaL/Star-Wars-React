import styles from './PersonLinkBack.module.css';

import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom'
import iconBack from './img/icon-left.png'

const PersonLinkBack = () => {
    const navigate = useNavigate();
    const handleGoBack = (event) => {
        event.preventDefault();
        console.log('handleGoBack');
        navigate(-1);
    }

    return (
        <a
            href="#"
            onClick={handleGoBack}
            className={styles.link}
        >   
            <img className={styles.link__img} src={iconBack} alt='Назад' />
            <span>Назад</span>
        </a>
    )
}

PersonLinkBack.propTypes = {
    // text: PropTypes.string
}

export default PersonLinkBack;