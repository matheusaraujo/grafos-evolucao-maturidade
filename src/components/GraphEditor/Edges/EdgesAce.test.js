import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import EdgesAce from './EdgesAce';

describe('EdgesAce', () => {
  Enzyme.configure({ adapter: new Adapter() });

  test('should match snapshot', () => {
    const component = shallow(
      <EdgesAce
        lang="pt"
        edges={[]}
        update={() => { }}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
