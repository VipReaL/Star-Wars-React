import styles from './UiLoading.module.css';

import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import cn from 'classnames';

import loaderBlack from './img/loader-black.svg';
import loaderBlue from './img/loader-blue.svg';
import loaderWhite from './img/loader-white.svg';


const UiLoading = ({
    theme = 'white',
    isShadow=true,
    classes,
}) => {
    const [loaderIcon, setLoaderIcon] = useState(null);

    useEffect(() => {
        switch (theme) {
            case 'black': setLoaderIcon(loaderBlack); break;
            case 'white': setLoaderIcon(loaderWhite); break;
            case 'blue': setLoaderIcon(loaderBlue); break;

            default: break;
        }
    }, []);

    return (
        <img
            className={cn(styles.loader, isShadow && styles.shadow, classes)}
            src={loaderIcon}
            alt='loader'
        />
    )
}

UiLoading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string,
}

export default UiLoading;