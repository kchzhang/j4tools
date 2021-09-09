import { cardNum } from "./_regExp";

const regCardNum = (value: string): boolean => {
  return cardNum.test(value)
}

export default regCardNum;