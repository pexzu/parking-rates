import * as React from 'react';
import * as E from './HomeStyles';
import DateTimePicker from '../../components/dateTimePicker/DateTimePicker';
import { PrimaryButton } from '../../styled/buttons/PrimaryButton';

interface HomeProps {}
interface HomeState {
  entryDate: Date;
  exitDate: Date;
}

export default class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      entryDate: new Date(),
      exitDate: new Date(),
    };
  }

  updateEntryDate = (date: Date) => {
    this.setState({
      entryDate: date,
    });
  };

  updateExitDate = (date: Date) => {
    this.setState({
      exitDate: date,
    });
  };

  render() {
    const { entryDate, exitDate } = this.state;
    return (
      <E.HomeContainer>
        <E.HomeHeaderBlock>Parking Rate Calculator</E.HomeHeaderBlock>
        <E.HomeInputBlock>
          <DateTimePicker
            inputLabel='Entry Date & Time'
            startDate={entryDate}
            onChange={this.updateEntryDate}
          />
          <DateTimePicker
            inputLabel='Exit Date and Time'
            startDate={exitDate}
            onChange={this.updateExitDate}
          />
          <PrimaryButton>Submit</PrimaryButton>
        </E.HomeInputBlock>
        <E.HomeInfoBlock />
      </E.HomeContainer>
    );
  }
}
