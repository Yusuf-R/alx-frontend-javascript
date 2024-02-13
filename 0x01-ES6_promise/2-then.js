function handleResponseFromAPI(promise) {
  // You need to return the promise chain so that the caller can handle it.
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}

export default handleResponseFromAPI;
