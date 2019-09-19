import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import OptionsAce from './OptionsAce';

describe('OptionsAce', () => {
  Enzyme.configure({ adapter: new Adapter() });

  test('should match snapshot', () => {
    const component = shallow(
      <OptionsAce
        lang="pt"
        options={{ height: '500px' }}
        update={() => { }}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
