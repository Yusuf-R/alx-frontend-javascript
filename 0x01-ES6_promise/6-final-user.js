import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

async function handleProfileSignup(firstName, lastName, fileName) {
  const pr1 = signUpUser(firstName, lastName); // Returns a promise
  const pr2 = uploadPhoto(fileName); // Returns a promise
  const allPr = [pr1, pr2];

  const results = await Promise.allSettled(allPr);
  return results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason.message,
  }));
}

export default handleProfileSignup;
