function getResponseFromAPI() {
  return new Promise((resolve) => {
    resolve({
      status: 200,
      body: 'Success',
    });
  });
}

export default getResponseFromAPI;
