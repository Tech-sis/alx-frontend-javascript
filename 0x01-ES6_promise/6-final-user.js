import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signup = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([signup, photo]).then((vals) => {
    const res = [];
    vals.forEach((val) => {
      if (val.status === 'fulfiled') {
        res.push({ status: val.status, value: val.value });
      } else {
        res.push({
          status: val.status,
          value: `Error: ${val.reason.message}`,
        });
      }
    });
    return res;
  });
}
