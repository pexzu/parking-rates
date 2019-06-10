import { getRate } from './RateCalculation';
import path from 'path';

test('Testing Standard Charges', () => {
  const data = getRate(new Date('May 17, 2019 03:24:00'), new Date('May 27, 2019 02:24:00'));
  expect(data).toStrictEqual('Your parking rate is calculated based on Standard Charges is: $200');
});

test('Testing Standard Charges with same time and date', () => {
  const data = getRate(new Date('May 17, 2019 03:24:00'), new Date('May 17, 2019 03:24:00'));
  expect(data).toStrictEqual('Your parking rate is calculated based on Standard Charges is: $5');
});

test('Testing EarlyBird Charges', () => {
  const data = getRate(new Date('Jun 10, 2019 06:44:00'), new Date('Jun 10, 2019 20:44:00'));
  expect(data).toStrictEqual(
    'You are qualified for Early Bird Charges and the total rate is: $130'
  );
});

test('Testing Night Charges', () => {
  const data = getRate(new Date('Jun 10, 2019 20:44:00'), new Date('Jun 11, 2019 15:44:00'));
  expect(data).toStrictEqual(
    'You are qualified for Night Rate charges and the total rate is: $6.5'
  );
});

test('Testing Weekend Charges', () => {
  const data = getRate(new Date('Jun 08, 2019 20:44:00'), new Date('Jun 09, 2019 15:44:00'));
  expect(data).toStrictEqual('You are qualified for Weekend Charges and the total rate is: $10');
});
