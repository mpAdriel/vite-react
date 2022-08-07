// resources
import { validateEmail } from './Validations';

const formLogin = prop => {
  const { email } = prop;
  const error = [];

  const errEmail = validateEmail(email);

  if (errEmail !== true) {
    error.push({ id: 'email', message: errEmail });
  }

  return error;
};

export { formLogin };
