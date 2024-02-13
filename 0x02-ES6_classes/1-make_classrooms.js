/* eslint-disable no-underscore-dangle */
import ClassRoom from './0-classroom';

const initializeRooms = () => {
  const arrObj = [];
  arrObj.push(new ClassRoom(19));
  arrObj.push(new ClassRoom(20));
  arrObj.push(new ClassRoom(34));
  return arrObj;
};

export default initializeRooms;
