import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as E from './DateTimePickerStyles';
import { start } from 'repl';

export interface IDateTimePickerProps {
  onChange: (date: Date) => void;
  startDate?: Date;
  minDate?: Date;
  maxDate?: Date;
  placeholder: string;
  inputLabel: string;
}

export interface IDateTimePickerState {
  currentMinTime: Date;
  currentMaxTime: Date;
}

export default class DateTimePicker extends React.Component<
  IDateTimePickerProps,
  IDateTimePickerState
> {
  constructor(props: IDateTimePickerProps) {
    super(props);
    this.state = {
      currentMinTime: new Date(new Date(new Date().setMinutes(0)).setHours(0)),
      currentMaxTime: new Date(new Date(new Date().setMinutes(59)).setHours(23)),
    };
  }

  onChange = (currentDate: Date) => {
    currentDate && this.props.onChange(currentDate);
    this.setMinTimeAndMaxTime(currentDate);
  };

  setMinTimeAndMaxTime = (currentDate: Date) => {
    const { minDate, maxDate } = this.props;
    if (currentDate && minDate && currentDate.getDate() === minDate.getDate()) {
      this.setState({
        currentMinTime: minDate,
      });
    } else {
      this.setState({
        currentMinTime: new Date(new Date(new Date().setMinutes(0)).setHours(0)),
      });
    }

    if (currentDate && maxDate && currentDate.getDate() === maxDate.getDate()) {
      this.setState({
        currentMaxTime: maxDate,
      });
    } else {
      this.setState({
        currentMaxTime: new Date(new Date(new Date().setMinutes(59)).setHours(23)),
      });
    }
  };

  onClick = () => {
    this.props.startDate && this.setMinTimeAndMaxTime(this.props.startDate);
  };

  public render() {
    const { inputLabel, startDate, onChange, minDate, maxDate, placeholder } = this.props;
    const { currentMaxTime, currentMinTime } = this.state;
    return (
      <E.DateTimePickerContainer>
        <E.DateTimePickerInputLabel>{inputLabel}</E.DateTimePickerInputLabel>
        <DatePicker
          placeholderText={placeholder}
          selected={startDate}
          onChange={currentDate => currentDate && this.onChange(currentDate)}
          showTimeSelect
          timeFormat='HH:mm'
          timeIntervals={15}
          dateFormat='MMMM d, yyyy h:mm aa'
          timeCaption='time'
          minDate={minDate && minDate}
          maxDate={maxDate && maxDate}
          minTime={currentMinTime}
          maxTime={currentMaxTime}
          onInputClick={() => this.onClick()}
        />
      </E.DateTimePickerContainer>
    );
  }
}
