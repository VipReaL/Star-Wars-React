import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Favorite from '@components/Favorite';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';

import imgDroid from './img/droid.svg'
import imgLightsaber from './img/lightsaber.svg'
import imgSpaceStation from './img/space-station.svg'

import styles from './Header.module.css';


const Header = () => {
    const [icon, setIcon] = useState(imgDroid);
    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIcon(imgLightsaber); break;
            case THEME_DARK: setIcon(imgSpaceStation); break;
            case THEME_NEUTRAL: setIcon(imgDroid); break;
        
            default: setIcon(imgDroid);
        }
    }, [isTheme])

    return (
        <div className={styles.container}>
            <ul className={styles.list__container}>
                <img className={styles.logo} src={icon} alt='Logo' />
                <li>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/people/?page=1" >People</NavLink>
                </li>
                <li>
                    <NavLink to="/not-found" >Not Found</NavLink>
                </li>
                <li>
                    <NavLink to="/search" >Search</NavLink>
                </li>
                <Favorite />
            </ul>
        </div>
    )
}

export default Header;