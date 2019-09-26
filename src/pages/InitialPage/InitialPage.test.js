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

  test('should trigger basicGraph', () => {
    const lang = 'pt';
    const updateNodeGroups = sinon.spy();
    const updateGraph = sinon.spy();
    const viewGraph = sinon.spy();
    const component = shallow(
      <InitialPage
        lang={lang}
        updateNodeGroups={updateNodeGroups}
        updateGraph={updateGraph}
        viewGraph={viewGraph}
      />,
    );
    component.find('.btn-basic-graph').simulate('click');
    expect(viewGraph.callCount).toBe(1);
    expect(updateGraph.callCount).toBe(1);
    expect(updateGraph.args[0][0]).toStrictEqual({
      nodes: basicGraph.nodes,
      edges: basicGraph.edges,
    });
    expect(updateNodeGroups.callCount).toBe(1);
    expect(updateNodeGroups.args[0][0]).toBe(basicGraph.groups);
  });

  test('should trigger systemEngineer', () => {
    const lang = 'pt';
    const updateNodeGroups = sinon.spy();
    const updateGraph = sinon.spy();
    const viewGraph = sinon.spy();
    const component = shallow(
      <InitialPage
        lang={lang}
        updateNodeGroups={updateNodeGroups}
        updateGraph={updateGraph}
        viewGraph={viewGraph}
      />,
    );
    component.find('.btn-system-engineer').simulate('click');
    expect(viewGraph.callCount).toBe(1);
    expect(updateGraph.callCount).toBe(1);
    expect(updateGraph.args[0][0]).toStrictEqual({
      nodes: systemEngineerGraph.nodes,
      edges: systemEngineerGraph.edges,
    });
    expect(updateNodeGroups.callCount).toBe(1);
    expect(updateNodeGroups.args[0][0]).toBe(systemEngineerGraph.groups);
  });
});
