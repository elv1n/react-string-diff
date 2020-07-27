import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StringDiff } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StringDiff newValue="testNew" oldValue="test" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
