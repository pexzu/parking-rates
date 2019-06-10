export const getRate = (entry: Date, exit: Date) => {
  console.log((exit.getTime() - entry.getTime()) / 1000);

  return 5;
};
