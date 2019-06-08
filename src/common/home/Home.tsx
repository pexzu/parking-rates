import * as React from 'react';
import * as E from './HomeStyles';
import DateTimePicker from '../../components/dateTimePicker/DateTimePicker';
import { PrimaryButton } from '../../styled/buttons/PrimaryButton';
import { DropdownIcon } from '../../assets/DropdownIcon';

interface IHomeProps {}
interface IHomeState {
  entryDate: Date;
  exitDate: Date;
  toggleInfo: boolean;
}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      entryDate: new Date(),
      exitDate: new Date(),
      toggleInfo: false,
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

  toggleInfo = () => {
    this.setState({
      toggleInfo: !this.state.toggleInfo,
    });
  };

  render() {
    const { entryDate, exitDate, toggleInfo } = this.state;
    return (
      <E.HomeContainer>
        <E.HomeHeaderBlock>Parking Rate Calculator</E.HomeHeaderBlock>
        <E.HomeInputBlock>
          <E.HomeInputBlockMessage>
            Please choose the time period for the parking rate calculation:
          </E.HomeInputBlockMessage>
          <DateTimePicker
            inputLabel='Entry: '
            startDate={entryDate}
            onChange={this.updateEntryDate}
          />
          <DateTimePicker inputLabel='Exit: ' startDate={exitDate} onChange={this.updateExitDate} />
          <PrimaryButton>Submit</PrimaryButton>
        </E.HomeInputBlock>
        <E.HomeInfoBlock onClick={this.toggleInfo}>
          <E.HomeInfoBlockLabel>Rate Info</E.HomeInfoBlockLabel>
          <E.HomeInfoBlockIcon rotate={toggleInfo}>
            <DropdownIcon />
          </E.HomeInfoBlockIcon>
        </E.HomeInfoBlock>
      </E.HomeContainer>
    );
  }
}
