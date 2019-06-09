import * as React from 'react';
import * as E from './HomeStyles';
import DateTimePicker from '../../components/dateTimePicker/DateTimePicker';
import { PrimaryTile } from '../../components/primaryTile/PrimaryTile';
import { ToggleInfoContent } from './elements/toggleInfoContent/ToggleInfoContent';
import { ToggleShowAboutUs } from './elements/toggleShowAboutUs/ToggleShowAboutUs';
import { PrimaryButton } from '../../styled/buttons/PrimaryButton';

interface IHomeProps {}
interface IHomeState {
  entryDate: Date;
  exitDate: Date;
  showInfo: boolean;
  showAboutUs: boolean;
}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      entryDate: new Date(),
      exitDate: new Date(),
      showInfo: false,
      showAboutUs: false,
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
      showInfo: !this.state.showInfo,
    });
  };

  toggleAboutUs = () => {
    this.setState({
      showAboutUs: !this.state.showAboutUs,
    });
  };

  render() {
    const { entryDate, exitDate, showInfo, showAboutUs } = this.state;
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
        <PrimaryTile onClick={this.toggleInfo} rotate={showInfo} label='Rate Info' />
        {showInfo && <ToggleInfoContent />}
        <PrimaryTile onClick={this.toggleAboutUs} rotate={showAboutUs} label='About Us' />
        {showAboutUs && <ToggleShowAboutUs />}
      </E.HomeContainer>
    );
  }
}
