import styles from './PeoplePage.module.css';

import { getApiResource } from '../../utils/network'
import { API_PEOPLE } from '../../constants/api'
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList'

import { useState, useEffect } from 'react';

const PeoplePage = () => {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    const peopleList = res.results.map(({ name, url }) => {
      const id = getPeopleId(url);
      const img = getPeopleImage(id);
      return {
        id: id,
        name: name,
        img: img,
      }
    })

    setPeople(peopleList);
  }

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return (
    <>
      {people && <PeopleList people={people} />}
    </>
  )
}

export default PeoplePage;