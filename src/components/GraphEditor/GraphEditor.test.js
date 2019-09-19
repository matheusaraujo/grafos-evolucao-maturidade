import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import GraphEditor from './GraphEditor';

describe('GraphEditor', () => {
  Enzyme.configure({ adapter: new Adapter() });

  test('should match snapshot', () => {
    const component = shallow(
      <GraphEditor
        lang="pt"
        pageMode="editing_nodes"
        editNodes={() => { }}
        editNodeGroups={() => { }}
        editEdges={() => { }}
        editOptions={() => { }}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
