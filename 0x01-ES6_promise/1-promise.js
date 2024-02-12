function getFullResponseFromAPI(success) {
  const fmsg = 'The fake API is not working currently';
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(fmsg);
    }
  });
}

export default getFullResponseFromAPI;
