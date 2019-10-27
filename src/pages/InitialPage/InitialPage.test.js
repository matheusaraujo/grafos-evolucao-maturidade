import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import InitialPage from './InitialPage';

describe('InitialPage', () => {
  Enzyme.configure({ adapter: new Adapter() });

  test('should match snapshot', () => {
    const lang = 'pt';
    const updateNodeGroups = () => { };
    const updateGraph = () => { };
    const viewGraph = () => { };
    const component = shallow(
      <InitialPage
        lang={lang}
        updateNodeGroups={updateNodeGroups}
        updateGraph={updateGraph}
        viewGraph={viewGraph}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
