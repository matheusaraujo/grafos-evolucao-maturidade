import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Calcs from './Calcs';
import basicGraph from '../../examples/basicGraph';

describe('Calcs', () => {
  Enzyme.configure({ adapter: new Adapter() });

  test('should match snapshot', () => {
    const nexts = {
      calculated: false,
      calculating: false,
      options: [],
    };
    const component = shallow(
      <Calcs
        lang="pt"
        graph={basicGraph}
        showNexts={() => { }}
        nexts={nexts}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
