import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

function handleProfileSignup(firstName, lastName, fileName) {
  const pr1 = signUpUser(firstName, lastName); // Returns a promise
  const pr2 = uploadPhoto(fileName); // Returns a promise
  const allPr = [pr1, pr2];

  return Promise.allSettled(allPr);
}

export default handleProfileSignup;
