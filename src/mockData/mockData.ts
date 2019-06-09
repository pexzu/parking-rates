export interface TRates {
  name: string;
  type: string;
  entry: string;
  exit: string;
  price: string | [{}];
}

export const rates: TRates[] = [
  {
    name: 'Early Bird',
    type: 'Flat Rate',
    price: '$130.00',
    entry: '6:00AM-9:00AM',
    exit: '3:30PM-11:30PM',
  },
  {
    name: 'Night Rate',
    type: 'Flat Rate',
    price: '$6.50',
    entry: '6:00PM-midnight(weekdays)',
    exit: '3:30PM-11:30PM',
  },
  {
    name: 'Weekend Rate',
    type: 'Flat Rate',
    price: '$10.00',
    entry: 'After midnight of Friday - Sunday',
    exit: 'Before midnight of Sunday',
  },
  {
    name: 'Standard Rate',
    type: 'HourlyRate',
    price: [
      {
        '0-1Hours': '$5.00',
        '1-2Hours': '$10.00',
        '2-3Hours': '$15.00',
        '3+Hours': '$20.00 flat rate per day',
      },
    ],
    entry: '',
    exit: '',
  },
];

export const aboutUs =
  'Welcome to Parking Rate Calculator, your number one source for all your parking crisis.';
