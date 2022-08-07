// resources
import { strings } from '../../translations/i18n';

const validateEmail = data => {
  const value = data?.trim();

  if (!value) return strings('form.required.email');
  if (typeof value !== 'string') return strings('form.be.string');

  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

  if (!regex.test(value)) return strings('form.invalid.email');

  return true;
};

export { validateEmail };
