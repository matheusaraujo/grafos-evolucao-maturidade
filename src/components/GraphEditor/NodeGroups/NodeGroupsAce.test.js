import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import NodeGroupsAce from './NodeGroupsAce';

describe('NodeGroupsAce', () => {
  Enzyme.configure({ adapter: new Adapter() });

  test('should match snapshot', () => {
    const component = shallow(
      <NodeGroupsAce
        lang="pt"
        nodeGroups={[]}
        update={() => { }}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
