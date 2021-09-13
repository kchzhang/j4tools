import cloneDeep from './.internal/cloneDeep';
import uniq from './.internal/uniq';
import uniqBy from './.internal/uniqBy';
import isEmpty from './.internal/isEmpty';
import regPhone from './regexp/regPhone';
import regMail from './regexp/regMail';
import regCardNum from './regexp/regCardNum';
import regCardNumGreen from './regexp/regCardNumGreen';
import regSocialCreditCode from './regexp/regSocialCreditCode';
import regPasswordStrong from './regexp/regPasswordStrong';
import isBrowser from './data/browser';
import deviceType from './data/deviceType';
import getURLParams from './data/getUrlParams';

export {
  cloneDeep,
  uniq,
  uniqBy,
  isEmpty,
  regPhone,
  regMail,
  regCardNum,
  regCardNumGreen,
  regSocialCreditCode,
  regPasswordStrong,
  isBrowser,
  deviceType,
  getURLParams
};
