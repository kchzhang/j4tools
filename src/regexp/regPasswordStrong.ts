import { passwordStrong } from "./_regExp";

const regPasswordStrong = (value: string): boolean => {
  return passwordStrong.test(value);
}

export default regPasswordStrong;