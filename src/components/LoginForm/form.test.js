import React    from 'react';
import renderer from 'react-test-renderer';
import { Form } from './Form';

describe('LoginForm Component > Form', () => {

  it('renders correctly', () => {
    const rendered = renderer.create(<Form/>);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});