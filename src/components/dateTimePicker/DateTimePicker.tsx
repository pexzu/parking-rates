import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as E from './DateTimePickerStyles';

export interface IDateTimePickerProps {
  onChange: (date: Date) => void;
  startDate: Date;
  inputLabel: string;
}

export default class DateTimePicker extends React.Component<IDateTimePickerProps, any> {
  public render() {
    const { inputLabel, startDate, onChange } = this.props;
    return (
      <E.DateTimePickerContainer>
        <E.DateTimePickerInputLabel>{inputLabel}</E.DateTimePickerInputLabel>
        <DatePicker
          selected={this.props.startDate}
          onChange={this.props.onChange}
          showTimeSelect
          timeFormat='HH:mm'
          timeIntervals={15}
          dateFormat='MMMM d, yyyy h:mm aa'
          timeCaption='time'
        />
      </E.DateTimePickerContainer>
    );
  }
}
