import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import InitialPage from './InitialPage';

describe('InitialPage', () => {
  Enzyme.configure({ adapter: new Adapter() });

  test('should match snapshot', () => {
    const language = 'pt';
    const loadPage = () => { };
    const updateGraph = () => { };
    const component = shallow(
      <InitialPage
        language={language}
        loadPage={loadPage}
        updateGraph={updateGraph}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  test('should trigger basicGraph', () => {
    const language = 'pt';
    const loadPage = sinon.spy();
    const updateGraph = sinon.spy();
    const component = shallow(
      <InitialPage
        language={language}
        loadPage={loadPage}
        updateGraph={updateGraph}
      />,
    );
    component.find('.btn-basic-graph').simulate('click');
    expect(loadPage.callCount).toBe(1);
    expect(updateGraph.callCount).toBe(1);
  });

  test('should trigger systemEngineer', () => {
    const language = 'pt';
    const loadPage = sinon.spy();
    const updateGraph = sinon.spy();
    const component = shallow(
      <InitialPage
        language={language}
        loadPage={loadPage}
        updateGraph={updateGraph}
      />,
    );
    component.find('.btn-system-engineer').simulate('click');
    expect(loadPage.callCount).toBe(1);
    expect(updateGraph.callCount).toBe(1);
  });
});
