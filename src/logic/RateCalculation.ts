import { config } from '../data/data';

export const getRate = (entry: Date, exit: Date) => {
  let rate;
  const timePeriodInHours = (exit.getTime() - entry.getTime()) / (1000 * 60 * 60);

  const isEarlyBirdEntry = entry.getHours() >= 6 && entry.getHours() <= 9;
  const isEarlyBirdOrNightExit =
    exit.getHours() + exit.getMinutes() / 100 >= 15 + 0.3 &&
    exit.getHours() + exit.getMinutes() / 100 <= 23 + 0.3;

  const isNightEntry = entry.getHours() >= 18 && entry.getHours() <= 23;
  if (
    (entry.getDay() === 6 || entry.getDay() === 0) &&
    (exit.getDay() === 6 || exit.getDay() === 0) &&
    timePeriodInHours <= 48 //same weekend
  ) {
    rate = 10;
    return config.weekendRateResultMessage + rate;
  } else if (timePeriodInHours <= 24 && isEarlyBirdEntry && isEarlyBirdOrNightExit) {
    rate = 130;
    return config.earlyBirdResultMessage + rate;
  } else if (timePeriodInHours <= 24 && isNightEntry && isEarlyBirdOrNightExit) {
    rate = 6.5;
    return config.nightRateResultMessage + rate;
  } else {
    rate = calculateStandardCharge(timePeriodInHours);
    return config.standardRateResultMessage + rate;
  }
};

const calculateStandardCharge = (hours: number) => {
  if (hours <= 1) {
    return 5;
  } else if (hours <= 2) {
    return 10;
  } else if (hours <= 3) {
    return 15;
  } else return Math.ceil(hours / 24) * 20;
};
