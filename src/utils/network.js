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

// Вызов через метод промис
// export const getApiResource = (url) => {
//   fetch(url)
//     .then(res => res.json())
//     .then(body => console.log(body))
//     .catch(error=>console.log(error.message))
// }
// getApiResource(SWAPI_ROOT+SWAPI_PEOPLE);

// Вызов через метод промис
// getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
//   .then(body => console.log(body))