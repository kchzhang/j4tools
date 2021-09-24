import { getURLParams } from '../src';
interface Params {
  [key: string]: any
}
describe('blah', () => {
  it('works', () => {
    const params: Params = getURLParams("http://www.j4tools.cn?name=knox.zhang");
    if (params['name'] == "knox.zhang") {
      console.log("ok");
    }
  });
});
