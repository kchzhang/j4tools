type IsBrowser = () => boolean;

const isBrowser: IsBrowser = () => ![typeof window, typeof document].includes("undefined");

export default isBrowser;
