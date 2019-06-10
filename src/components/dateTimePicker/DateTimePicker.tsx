import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as E from './DateTimePickerStyles';

export interface IDateTimePickerProps {
  onChange: (date: Date) => void;
  startDate?: Date;
  minDate?: Date;
  maxDate?: Date;
  maxTime?: Date;
  minTime?: Date;
  placeholder: string;
  inputLabel: string;
}

export default class DateTimePicker extends React.Component<IDateTimePickerProps, any> {
  public render() {
    const {
      inputLabel,
      startDate,
      onChange,
      minDate,
      maxDate,
      placeholder,
      minTime,
      maxTime,
    } = this.props;
    return (
      <E.DateTimePickerContainer>
        <E.DateTimePickerInputLabel>{inputLabel}</E.DateTimePickerInputLabel>
        <DatePicker
          placeholderText={placeholder}
          selected={this.props.startDate}
          onChange={this.props.onChange}
          showTimeSelect
          timeFormat='HH:mm'
          timeIntervals={15}
          dateFormat='MMMM d, yyyy h:mm aa'
          timeCaption='time'
          minDate={minDate && minDate}
          maxDate={maxDate && maxDate}
          minTime={minDate ? minDate : new Date(new Date(new Date().setMinutes(0)).setHours(0))}
          maxTime={maxDate ? maxDate : new Date(new Date().setHours(23))}
        />
      </E.DateTimePickerContainer>
    );
  }
}
