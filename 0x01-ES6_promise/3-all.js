import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [uploadPhotoResult, createUserResult] = results;
      const { body } = uploadPhotoResult;
      const { firstName, lastName } = createUserResult;
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
