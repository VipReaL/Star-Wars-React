import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({
    getResource,
    prevPage,
    nextPage,
    counterPage
}) => {

    const handelChangeNext = () => getResource(nextPage);
    const handelChangePrev = () => getResource(prevPage);

    return (
        <div>
            <Link to={`/people/?page=${counterPage-1}`} className={styles.link}>
                <button
                    onClick={handelChangePrev}
                    disabled={!prevPage}
                    className={styles.button}
                >
                    Назад
                </button>
            </Link>
            <Link to={`/people/?page=${counterPage+1}`} className={styles.link}>
                <button
                    onClick={handelChangeNext}
                    disabled={!nextPage}
                    className={styles.button}
                >
                    Вперёд
                </button>
            </Link>
        </div>
    )
}

PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number,
}

export default PeopleNavigation;