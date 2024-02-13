import { createUser, uploadPhoto } from './utils';

async function asyncUploadUser() {
  const failMsg = {
    photo: null,
    user: null,
  };
  try {
    const rspPhoto = await uploadPhoto();
    const rspUser = await createUser();

    if (!rspUser || !rspPhoto) {
      return failMsg;
    }
    return {
      photo: rspPhoto,
      user: rspUser,
    };
  } catch (err) {
    return failMsg;
  }
}

export default asyncUploadUser;
