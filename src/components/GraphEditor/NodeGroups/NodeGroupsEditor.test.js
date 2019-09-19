import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import NodeGroupsEditor from './NodeGroupsEditor';

describe('NodeGroupsEditor', () => {
  Enzyme.configure({ adapter: new Adapter() });

  test('should match snapshot', () => {
    const component = shallow(
      <NodeGroupsEditor
        lang="pt"
        nodeGroups={[]}
        updateNodeGroups={() => { }}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
