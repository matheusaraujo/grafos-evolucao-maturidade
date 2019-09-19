import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import NodesEditor from './NodesEditor';

describe('NodesEditor', () => {
  Enzyme.configure({ adapter: new Adapter() });

  test('should match snapshot', () => {
    const component = shallow(
      <NodesEditor
        lang="pt"
        nodes={[]}
        updateNodes={() => { }}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
