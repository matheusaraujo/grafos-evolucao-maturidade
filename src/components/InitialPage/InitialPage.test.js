import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import InitialPage from './InitialPage';

import basicGraph from '../../examples/basicGraph';
import systemEngineerGraph from '../../examples/systemEngineerGraph';

describe('InitialPage', () => {
  Enzyme.configure({ adapter: new Adapter() });

  test('should match snapshot', () => {
    const lang = 'pt';
    const loadPage = () => { };
    const updateGraph = () => { };
    const component = shallow(
      <InitialPage
        lang={lang}
        loadPage={loadPage}
        updateGraph={updateGraph}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  test('should trigger basicGraph', () => {
    const lang = 'pt';
    const loadPage = sinon.spy();
    const updateGraph = sinon.spy();
    const component = shallow(
      <InitialPage
        lang={lang}
        loadPage={loadPage}
        updateGraph={updateGraph}
      />,
    );
    component.find('.btn-basic-graph').simulate('click');
    expect(loadPage.callCount).toBe(1);
    expect(updateGraph.callCount).toBe(1);
    expect(updateGraph.args[0][0]).toBe(basicGraph);
  });

  test('should trigger systemEngineer', () => {
    const lang = 'pt';
    const loadPage = sinon.spy();
    const updateGraph = sinon.spy();
    const component = shallow(
      <InitialPage
        lang={lang}
        loadPage={loadPage}
        updateGraph={updateGraph}
      />,
    );
    component.find('.btn-system-engineer').simulate('click');
    expect(loadPage.callCount).toBe(1);
    expect(updateGraph.callCount).toBe(1);
    expect(updateGraph.args[0][0]).toBe(systemEngineerGraph);
  });
});
