import styles from './PersonPage.module.css';

import { useEffect, useState } from 'react';
import { getApiResource } from '@utils/network';
import { API_PERSON } from '@constants/api'
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getPeopleImage } from '@services/getPeopleData';
import PersonPhoto from '@components/PersonPage/PersonPhoto'
import PersonInfo from '@components/PersonPage/PersonInfo'
import PersonLinkBack from '@components/PersonPage/PersonLinkBack'
import PropTypes from 'prop-types';

const PersonPage = ({ setErrorApi }) => {
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);

    useEffect(() => {

        (async () => {

            // вынести в отдельную функцию в 'services'
            const currentUrl = window.location.href;
            const pos = currentUrl.lastIndexOf('/')
            const id = currentUrl.slice(pos + 1, currentUrl.length)
            // console.log(currentUrl);
            // console.log(pos);
            // console.log(id);

            const res = await getApiResource(`${API_PERSON}/${id}/`);
            // console.log(`${API_PERSON}/${id}/`, res);

            if (res) {
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Hair Color', data: res.hair_color },
                    { title: 'Skin Color', data: res.skin_color },
                    { title: 'Eye Color', data: res.eye_color },
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'Gender', data: res.gender },
                ]);
                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id));

                // res.films (['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/5/', 'https://swapi.dev/api/films/6/'])

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }

        })();

    }, []);

    return (
        <>
            <PersonLinkBack />
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>

                <div className={styles.container}>
                    <PersonPhoto
                        personPhoto={personPhoto}
                        personName={personName}
                    />

                    {/* personInfo && ( - если данные в personInfo есть то отобразим (на старте приложения там пусто) */}
                    {personInfo && <PersonInfo personInfo={personInfo} />}
                </div>
            </div>
        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func,
}

export default withErrorApi(PersonPage);