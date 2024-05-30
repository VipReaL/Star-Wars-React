import {
  HTTPS,
  SWAPI_PEOPLE,
  SWAPI_ROOT,
  URL_IMG_PERSON,
  GUIDE_IMG_EXTENSION,
  SWAPI_PEOPLE_PAGE
} from "@constants/api";

/**
 * 
 * @param {String} url - url с которого будем получать номер страницы
 * @returns {Number} - Number(id) - номер страницы
 */
export const getPeoplePageId = url => {
  const pos = url.lastIndexOf(SWAPI_PEOPLE_PAGE);
  const id = url.slice(pos+SWAPI_PEOPLE_PAGE.length, url.length);

  return Number(id);
}

const getId = (url, category) => {
  const id = url
    .replace(HTTPS+SWAPI_ROOT+category, '')
    .replace(/\//g, '')
  return id;
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`; //нет доступа к сайту - заблокировали TODO: FIXME:
