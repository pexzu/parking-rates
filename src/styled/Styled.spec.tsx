import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { PrimaryButton } from './buttons/PrimaryButton';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

describe('PrimaryButton component', () => {
  test('render', () => {
    const wrapper = shallow(<PrimaryButton />);
    expect(wrapper.exists()).toBe(true);
  });
});

//Snapshot Testing
it('PrimaryButton renders correctly', () => {
  const tree = renderer.create(<PrimaryButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
