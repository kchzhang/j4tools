import isEmpty from '../.internal/isEmpty';

interface Data {
  [key: string]: string
}

interface Options {
  name?: string
  enctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'
  action: string
  method: 'GET' | 'POST'
  target?: '_self' | '_blank' | '_parent' | '_top'
  data?: Data
}

type FormDown = (options: Options) => void

const formDown: FormDown = (options) => {
  const { action, method = 'GET', data = {}, enctype = 'application/x-www-form-urlencoded', target = '_self', name = '' } = options;
  const elForm: HTMLFormElement = document.createElement('form');
  elForm.setAttribute('style', 'display:none');
  elForm.setAttribute('name', name);
  elForm.setAttribute('action', action);
  elForm.setAttribute('method', method);
  elForm.setAttribute('enctype', enctype);
  elForm.setAttribute('target', target);

  if (!isEmpty(data)) {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const value = data[key];
        const elInput: HTMLInputElement = document.createElement('input');
        elInput.setAttribute('type', 'hidden');
        elInput.setAttribute('name', key);
        elInput.setAttribute('value', value);
        elForm.appendChild(elInput);
      }
    }

  }
  document.body.appendChild(elForm);
  elForm.submit();
  elForm.remove();
}


export default formDown;