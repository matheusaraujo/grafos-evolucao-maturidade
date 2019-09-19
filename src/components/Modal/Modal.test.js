import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Modal from './Modal';

describe('Modal', () => {
  Enzyme.configure({ adapter: new Adapter() });

  test('should match snapshot', () => {
    const component = shallow(
      <Modal
        visible
        title="title"
        subtitle="subtitle"
        content="content"
        hideModal={() => { }}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
