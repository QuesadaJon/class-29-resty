export const fetchApi = (urlInput, crudMethod, requestBody) =>  {
  if(crudMethod === 'GET'){
    return fetch(urlInput, {
      crudMethod,
      headers: {
        'Content-Type': 'application/json'
      }, requestBody
    }).then(res => res.json());
  }
  return fetch(urlInput).then(res => res.json());
};
