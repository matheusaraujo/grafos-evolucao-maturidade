import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import GraphViewer from './GraphViewer';

describe('GraphViewer', () => {
  Enzyme.configure({ adapter: new Adapter() });

  test('should match snapshot', () => {
    const graph = { nodes: [], edges: [] };
    const component = shallow(
      <GraphViewer graph={graph} />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
