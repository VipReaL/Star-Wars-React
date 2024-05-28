import { HTTP, HTTPS } from "@constants/api";

/**
 * Изменяет url с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url с HTTPS
 */
export const changeHTTP = url => {
  const result = url ? url.replace(HTTP, HTTPS) : url;

  return result;
}

/**
 * Отправляет запрос Fetch
 * @param {String} url - url для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error('Ошибка Api.', res.status);
      return false;
    }

    return await res.json();
  } catch (error) {
    console.error('Ошибка Api.', error.message);
    return false;
  }
}

// (async () => {
//   const body = await getApiResource(SWAPI_ROOT+SWAPI_PEOPLE);
//   console.log(body);
// })();

// Вызов через метод Promise
// export const getApiResource = (url) => {
//   fetch(url)
//     .then(res => res.json())
//     .then(body => console.log(body))
//     .catch(error=>console.log(error.message))
// }
// getApiResource(SWAPI_ROOT+SWAPI_PEOPLE);

// Вызов через метод Promise
// getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
//   .then(body => console.log(body))