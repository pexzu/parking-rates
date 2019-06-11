/*This file consists of all the sampledate and configurations for the application.
This can be retrieved from backend later, so that users can configure and update the application
 withoud any difficulties.*/

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
    entry: 'Entry: 6:00AM - 9:00AM',
    exit: 'Exit: 3:30PM - 11:30PM',
  },
  {
    name: 'Night Rate',
    type: 'Flat Rate',
    price: '$6.50',
    entry: 'Entry: 6:00PM - midnight(weekdays)',
    exit: 'Exit: 3:30PM-11:30PM',
  },
  {
    name: 'Weekend Rate',
    type: 'Flat Rate',
    price: '$10.00',
    entry: 'Entry: After midnight of Friday - Sunday',
    exit: 'Exit: Before midnight of Sunday',
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
  'Welcome to Parking Rate Calculator, your number one source for all your parking crisis.Welcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisisWelcome to Parking Rate Calculator, your number one source for all your parking crisis';

export const config = {
  title: 'Parking Rate Calculator',
  mainInstruction: 'Please choose the time period for the parking rate calculation: ',
  entryFieldLabel: 'Entry: ',
  exitFieldLabel: ' Exit: ',
  entryPlaceholder: 'Select entry',
  exitPlaceholder: 'Select exit',
  infoLabel: 'Rate Info',
  aboutUsLabel: 'About Us',
  submitButtonLabel: 'Submit',
  clearButtonLabel: 'Clear',
  earlyBirdResultMessage: 'You are qualified for Early Bird Charges and the total rate is: $',
  nightRateResultMessage: 'You are qualified for Night Rate charges and the total rate is: $',
  weekendRateResultMessage: 'You are qualified for Weekend Charges and the total rate is: $',
  standardRateResultMessage: 'Your parking rate is calculated based on Standard Charges is: $',
};
