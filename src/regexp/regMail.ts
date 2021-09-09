import { mail } from './_regExp';

const regMail = (value: string): boolean => {
  return mail.test(value);
}

export default regMail;