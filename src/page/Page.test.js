import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Page from './Page';

describe('Page', () => {
  Enzyme.configure({ adapter: new Adapter() });

  test('should match snapshot - loaded', () => {
    const loaded = true;
    const component = shallow(
      <Page loaded={loaded} />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  test('should match snapshot - unloaded', () => {
    const loaded = false;
    const component = shallow(
      <Page loaded={loaded} />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
