import styles from './PersonPhoto.module.css';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setPersonToFavorite, removePersonFromFavorite } from '@store/actions';

import iconFavorite from './img/Favorite.svg'
import iconFavoriteFill from './img/Favorite-fill.svg'

const PersonPhoto = ({ personId, personPhoto, personName, personFavorite, setPersonFavorite }) => {
    const dispatch = useDispatch();

    const dispatchFavoritePeople = () => {
        if (personFavorite) {
            dispatch(removePersonFromFavorite(personId));
            setPersonFavorite(false);
        } else {
            dispatch(setPersonToFavorite(
                {
                    [personId]: {
                        name: personName,
                        img: personPhoto
                    }
                }
            ));
            setPersonFavorite(true);
        }
    }

    return (
        <>
            <div className={styles.container}>
                <img 
                    className={styles.photo}
                    src={personPhoto}
                    alt={personName}
                />
                <img
                    src={personFavorite ? iconFavoriteFill : iconFavorite}
                    onClick={dispatchFavoritePeople}
                    alt="Add to favorite"
                    className={styles.favorite}
                />
            </div>
        </>
    )
}

PersonPhoto.propTypes = {
    personId: PropTypes.string,
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func,
}

export default PersonPhoto;