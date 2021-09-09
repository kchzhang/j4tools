import { socialCreditCode } from './_regExp';

const regSocialCreditCode = (value: string): boolean => {
  return socialCreditCode.test(value)
}

export default regSocialCreditCode;