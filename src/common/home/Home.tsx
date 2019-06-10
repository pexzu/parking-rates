import * as React from 'react';
import * as E from './HomeStyles';
import DateTimePicker from '../../components/dateTimePicker/DateTimePicker';
import PrimaryTile from '../../components/primaryTile/PrimaryTile';
import { ToggleInfoContent } from './elements/toggleInfoContent/ToggleInfoContent';
import { ToggleShowAboutUs } from './elements/toggleShowAboutUs/ToggleShowAboutUs';
import { PrimaryButton } from '../../styled/buttons/PrimaryButton';
import { CalculatedResult } from './elements/calculatedResult/CalculatedResult';
import { config } from '../../data/data';

interface IHomeProps {}
interface IHomeState {
  entryDate?: Date;
  exitDate?: Date;
  showInfo: boolean;
  showAboutUs: boolean;
  showCalculatedResult: boolean;
}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      showInfo: true,
      showAboutUs: false,
      showCalculatedResult: false,
    };
  }

  updateEntryDate = (date: Date) => {
    this.setState(
      {
        entryDate: date,
      },
      () => {
        this.toggleOffCalculatedRate();
      }
    );
  };

  updateExitDate = (date: Date) => {
    this.setState(
      {
        exitDate: date,
      },
      () => {
        this.toggleOffCalculatedRate();
      }
    );
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

  toggleOffCalculatedRate = () => {
    this.setState({
      showCalculatedResult: false,
    });
  };

  toggleCalculatedRate = () => {
    this.setState({
      showCalculatedResult: true,
    });
  };

  render() {
    const { entryDate, exitDate, showInfo, showAboutUs, showCalculatedResult } = this.state;

    return (
      <E.HomeContainer>
        <E.HomeHeaderBlock>{config.title}</E.HomeHeaderBlock>
        <E.HomeInputBlock>
          <E.HomeInputBlockMessage>{config.mainInstruction}</E.HomeInputBlockMessage>
          <DateTimePicker
            inputLabel={config.entryFieldLabel}
            startDate={entryDate && entryDate}
            onChange={this.updateEntryDate}
            maxDate={exitDate}
            placeholder={config.entryPlaceholder}
          />
          <DateTimePicker
            inputLabel={config.exitFieldLabel}
            minDate={entryDate}
            startDate={exitDate && exitDate}
            onChange={this.updateExitDate}
            placeholder={config.exitPlaceholder}
          />

          <PrimaryButton onClick={this.toggleCalculatedRate} disabled={!(entryDate && exitDate)}>
            {config.submitButtonLabel}
          </PrimaryButton>
          {showCalculatedResult && entryDate && exitDate && (
            <CalculatedResult entry={entryDate} exit={exitDate} />
          )}
        </E.HomeInputBlock>
        <PrimaryTile onClick={this.toggleInfo} rotate={showInfo} label={config.infoLabel} />
        {showInfo && <ToggleInfoContent />}
        <PrimaryTile
          onClick={this.toggleAboutUs}
          rotate={showAboutUs}
          label={config.aboutUsLabel}
        />
        {showAboutUs && <ToggleShowAboutUs />}
      </E.HomeContainer>
    );
  }
}
