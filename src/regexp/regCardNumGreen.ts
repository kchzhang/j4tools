import { cardNumGreen } from "./_regExp";

const regCardNumGreen = (value: string): boolean => {
  return cardNumGreen.test(value)
}

export default regCardNumGreen;