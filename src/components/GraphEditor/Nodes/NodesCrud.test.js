import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import NodesCrud from './NodesCrud';

describe('NodesCrud', () => {
  Enzyme.configure({ adapter: new Adapter() });

  test('should match snapshot', () => {
    const component = shallow(
      <NodesCrud
        lang="pt"
        nodes={[]}
        update={() => { }}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
