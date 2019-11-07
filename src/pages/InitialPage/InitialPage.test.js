import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import InitialPage from './InitialPage';

describe('InitialPage', () => {
  Enzyme.configure({ adapter: new Adapter() });

  test('should match snapshot', () => {
    const lang = 'pt';
    const openBasicGraph = () => { };
    const openSystemEngineerGraph1 = () => { };
    const openSystemEngineerGraph2 = () => { };
    const openSystemEngineerGraph3 = () => { };
    const openSystemEngineerGraph4 = () => { };
    const openDevOpsGraph1 = () => { };
    const openDevOpsGraph2 = () => { };
    const openDevOpsGraph3 = () => { };
    const component = shallow(
      <InitialPage
        lang={lang}
        openBasicGraph={openBasicGraph}
        openSystemEngineerGraph1={openSystemEngineerGraph1}
        openSystemEngineerGraph2={openSystemEngineerGraph2}
        openSystemEngineerGraph3={openSystemEngineerGraph3}
        openSystemEngineerGraph4={openSystemEngineerGraph4}
        openDevOpsGraph1={openDevOpsGraph1}
        openDevOpsGraph2={openDevOpsGraph2}
        openDevOpsGraph3={openDevOpsGraph3}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
