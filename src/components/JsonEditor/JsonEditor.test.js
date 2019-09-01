import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import JsonEditor from './JsonEditor';

describe('JsonEditor', () => {
  Enzyme.configure({ adapter: new Adapter() });

  test('should match snapshot', () => {
    const language = 'pt';
    const showCode = true;
    const graph = { nodes: [], edges: [] };
    const toggleCode = sinon.spy();
    const updateGraph = sinon.spy();
    const component = shallow(
      <JsonEditor
        language={language}
        showCode={showCode}
        toggleCode={toggleCode}
        updateGraph={updateGraph}
        graph={graph}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  test('should trigger updateGraph', () => {
    const language = 'pt';
    const showCode = true;
    const graph = { nodes: [], edges: [] };
    const toggleCode = sinon.spy();
    const updateGraph = sinon.spy();
    const component = shallow(
      <JsonEditor
        language={language}
        showCode={showCode}
        toggleCode={toggleCode}
        updateGraph={updateGraph}
        graph={graph}
      />,
    );
    component.find('.btn-update-graph').simulate('click');
    expect(updateGraph.callCount).toBe(1);
  });
});
