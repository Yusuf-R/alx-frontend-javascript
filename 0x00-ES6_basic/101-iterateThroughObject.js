/* eslint-disable array-callback-return */
/* eslint-disable no-useless-concat */
export default function iterateThroughObject(reportWithIterator) {
  let dspName = '';
  reportWithIterator.map((name, index) => {
    if (index !== reportWithIterator.length - 1) {
      dspName = `${dspName}${name}` + ' | ';
    } else {
      dspName += `${name}`;
    }
  });
  return dspName;
}
