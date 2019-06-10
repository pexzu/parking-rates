import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import DateTimePicker from './DateTimePicker';
import { DateTimePickerContainer, DateTimePickerInputLabel } from './DateTimePickerStyles';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

describe('DateTimePicker component', () => {
  test('render', () => {
    const wrapper = shallow(
      <DateTimePicker onChange={() => {}} inputLabel='testLabel' placeholder='placeholder' />
    );
    expect(wrapper.exists()).toBe(true);
  });
});

//Snapshot Testing
it('DateTimePickerContainer renders correctly', () => {
  const tree = renderer.create(<DateTimePickerContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('DateTimePickerInputLabel renders correctly', () => {
  const tree = renderer.create(<DateTimePickerInputLabel />).toJSON();
  expect(tree).toMatchSnapshot();
});
