import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import EdgesEditor from './EdgesEditor';

describe('EdgesEditor', () => {
  Enzyme.configure({ adapter: new Adapter() });

  test('should match snapshot', () => {
    const component = shallow(
      <EdgesEditor
        lang="pt"
        edges={[]}
        updateEdges={() => { }}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
