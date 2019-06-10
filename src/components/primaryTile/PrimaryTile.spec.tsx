import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { PrimaryTileBlock, PrimaryTileBlockIcon, PrimaryTileBlockLabel } from './PrimaryTileStyles';
import PrimaryTile from './PrimaryTile';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

describe('PrimaryTile component', () => {
  test('render', () => {
    const wrapper = shallow(<PrimaryTile rotate={true} label='testing' onClick={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });
});

//Snapshot Testing
it('PrimaryTileBlock renders correctly', () => {
  const tree = renderer.create(<PrimaryTileBlock />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('PrimaryTileBlockLabel renders correctly', () => {
  const tree = renderer.create(<PrimaryTileBlockLabel />).toJSON();
  expect(tree).toMatchSnapshot();
});
