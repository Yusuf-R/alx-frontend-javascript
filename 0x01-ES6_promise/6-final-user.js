/* eslint-disable no-unused-expressions */
import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

// async function handleProfileSignup(firstName, lastName, fileName) {
//   const pr1 = signUpUser(firstName, lastName); // Returns a promise
//   const pr2 = uploadPhoto(fileName); // Returns a promise
//   const allPr = [pr1, pr2];

//   const results = await Promise.allSettled(allPr);
//   return results.map((result) => ({
//     status: result.status,
//     value: result.status === 'fulfilled' ? result.value : result.reason.message,
//   }));
// }

function handleProfileSignup(firstName, lastName, fileName) {
  const p1 = signUpUser(firstName, lastName);
  const p2 = uploadPhoto(fileName);
  const allPromises = [p1, p2];
  // const obj = [];
  // return Promise.allSettled(allPromises)
  //   .then((rezPromise) => {
  //     rezPromise.forEach((result) => {
  //       obj.push({
  //         status: result.status,
  //         value: result.status === 'fulfilled' ? result.value : result.reason.message,
  //       });
  //     });
  //     return obj;
  //   });
  return Promise.allSettled(allPromises)
    .then((results) => results.map((aPx) => ({
      status: aPx.status,
      value: aPx.status === 'fulfilled' ? aPx.value : `Error: ${aPx.reason.message}`,
    })));
}

export default handleProfileSignup;
