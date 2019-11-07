import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import NextsOptions from './NextsOptions';
import basicGraph from '../../../examples/basicGraph';

describe('NextsOptions', () => {
  Enzyme.configure({ adapter: new Adapter() });

  test('should match snapshot', () => {
    const component = shallow(
      <NextsOptions
        nexts={{}}
        graph={basicGraph}
        showNexts={() => { }}
        hideNexts={() => { }}
        beginCalcNexts={() => { }}
        changeNodesStatus={() => { }}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
