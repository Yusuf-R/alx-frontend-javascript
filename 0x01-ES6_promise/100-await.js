import { createUser, uploadPhoto } from './utils';

async function asyncUploadUser() {
  const rspPhoto = await uploadPhoto();
  const rspUser = await createUser();

  const retFail = {
    photo: null,
    user: null,
  };
  if (!rspUser || !rspPhoto) {
    return retFail;
  }
  return {
    photo: rspPhoto,
    user: rspUser,
  };
}

export default asyncUploadUser;
