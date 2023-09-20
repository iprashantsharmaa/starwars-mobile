import { starWarsCharacters } from '../../utils/constants';

export const authenticateUser = data => {
  return new Promise((res, rej) => {
    const { username, password } = data;
    const sanitizedUserName = username.toLowerCase().split(' ').join('');
    if (sanitizedUserName.toLowerCase() in starWarsCharacters) {
      const correctPassword = starWarsCharacters[sanitizedUserName];
      if (password === correctPassword) {
        res({
          status: 'success',
          message: 'Authentication successful',
          user: username,
        });
      } else {
        rej({
          status: 'failed',
          message: 'Incorrect password, Please try again',
        });
      }
    } else {
      rej({
        status: 'failed',
        message: 'Incorrect username, Please try again',
      });
    }
  });
};
