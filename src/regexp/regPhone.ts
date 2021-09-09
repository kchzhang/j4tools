import { phone } from './_regExp';

const regPhone = (value: string): boolean => {
  return phone.test(value)
}

export default regPhone
