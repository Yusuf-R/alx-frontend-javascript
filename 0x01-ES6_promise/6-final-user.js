/* eslint-disable no-unused-expressions */
import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

function handleProfileSignup(firstName, lastName, fileName) {
  const p1 = signUpUser(firstName, lastName);
  const p2 = uploadPhoto(fileName);
  const allPromises = [p1, p2];
  return Promise.allSettled(allPromises)
    .then((results) => results.map((aPx) => ({
      status: aPx.status,
      value: aPx.status === 'fulfilled' ? aPx.value : `Error: ${aPx.reason.message}`,
    })));
}

export default handleProfileSignup;
