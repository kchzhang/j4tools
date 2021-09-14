type DateToMs = (time: string | Date) => number;

const dateToMs: DateToMs = (time): number => {
  return new Date(time).getTime() || 0;
}

export default dateToMs;