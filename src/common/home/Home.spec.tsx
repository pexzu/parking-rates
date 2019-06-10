import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Home from './Home';
import { ToggleInfoContent } from './elements/toggleInfoContent/ToggleInfoContent';
import { ToggleShowAboutUs } from './elements/toggleShowAboutUs/ToggleShowAboutUs';
import { CalculatedResult } from './elements/calculatedResult/CalculatedResult';
import {
  OtherRatesBlock,
  OtherRatesContainer,
  OtherRatesCost,
  OtherRatesPeriod,
  ToggleInfoContentBlock,
  ToggleInfoContentBlockRightSide,
  ToggleInfoContentBlockConditon,
  ToggleInfoContentBlockLabel,
  ToggleInfoContentBlockLeftSide,
  ToggleInfoContentBlockPrice,
  ToggleInfoContentBlockSection,
  ToggleInfoContentBlockType,
  ToggleInfoContentContainer,
} from './elements/toggleInfoContent/ToggleInfoContentStyles';

import { AboutUsContainer } from './elements/toggleShowAboutUs/ToggleShowAboutUsStyles';
import { CalculatedResultContatiner } from './elements/calculatedResult/CalculatedResultStyles';
import {
  HomeContainer,
  HomeHeaderBlock,
  HomeInputBlock,
  HomeInputBlockMessage,
} from './HomeStyles';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

describe('Home component', () => {
  test('render', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('ToggleInfoContent component', () => {
  test('render', () => {
    const wrapper = shallow(<ToggleInfoContent />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('ToggleShowAboutUs component', () => {
  test('render', () => {
    const wrapper = shallow(<ToggleShowAboutUs />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('CalculatedResult component', () => {
  test('render', () => {
    const wrapper = shallow(<CalculatedResult entry={new Date()} exit={new Date()} />);
    expect(wrapper.exists()).toBe(true);
  });
});

//Snapshot Testing
it('HomeContainer renders correctly', () => {
  const tree = renderer.create(<HomeContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('HomeHeaderBlock renders correctly', () => {
  const tree = renderer.create(<HomeHeaderBlock />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('HomeInputBlock renders correctly', () => {
  const tree = renderer.create(<HomeInputBlock />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('HomeInputBlockMessage renders correctly', () => {
  const tree = renderer.create(<HomeInputBlockMessage />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('OtherRatesBlock renders correctly', () => {
  const tree = renderer.create(<OtherRatesBlock />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('OtherRatesContainer renders correctly', () => {
  const tree = renderer.create(<OtherRatesContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('OtherRatesCost renders correctly', () => {
  const tree = renderer.create(<OtherRatesCost />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('OtherRatesPeriod renders correctly', () => {
  const tree = renderer.create(<OtherRatesPeriod />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('ToggleInfoContentBlock renders correctly', () => {
  const tree = renderer.create(<ToggleInfoContentBlock />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('ToggleInfoContentBlockRightSide renders correctly', () => {
  const tree = renderer.create(<ToggleInfoContentBlockRightSide />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('ToggleInfoContentBlockConditon renders correctly', () => {
  const tree = renderer.create(<ToggleInfoContentBlockConditon />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('ToggleInfoContentBlockLabel renders correctly', () => {
  const tree = renderer.create(<ToggleInfoContentBlockLabel />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('ToggleInfoContentBlockLeftSide renders correctly', () => {
  const tree = renderer.create(<ToggleInfoContentBlockLeftSide />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('ToggleInfoContentContainer renders correctly', () => {
  const tree = renderer.create(<ToggleInfoContentContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('ToggleInfoContentBlockType renders correctly', () => {
  const tree = renderer.create(<ToggleInfoContentBlockType />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('ToggleInfoContentBlockSection renders correctly', () => {
  const tree = renderer.create(<ToggleInfoContentBlockSection />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('ToggleInfoContentBlockPrice renders correctly', () => {
  const tree = renderer.create(<ToggleInfoContentBlockPrice />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('AboutUsContainer renders correctly', () => {
  const tree = renderer.create(<AboutUsContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('CalculatedResultContatiner renders correctly', () => {
  const tree = renderer.create(<CalculatedResultContatiner />).toJSON();
  expect(tree).toMatchSnapshot();
});
