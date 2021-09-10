
type GetURLParams = (url: string) => object;

const getURLParams: GetURLParams = (url) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a: any, v: string) => (
      (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );

export default getURLParams;