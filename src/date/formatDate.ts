interface O {
  [key: string]: number
}
type FormatDate = (ms: string | number, fmt: string) => string;

const formatDate: FormatDate = (ms, fmt = "yyyy-MM-dd hh:mm:ss") => {
  const date = new Date(ms);
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  let o: O = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
  };
  for (let k in o) {

    let str = o[k] + "";
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : ("00" + str).substr(str.length)
      );
    }
  }
  return fmt;
}

export default formatDate;