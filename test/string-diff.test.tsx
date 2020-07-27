import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { StringDiff } from '../src';

describe('it', () => {
  it('should display added', () => {
    render(<StringDiff newValue="testNew" oldValue="test" />);
    const diffNode = screen.getByText(/New/i);
    expect(diffNode.style.backgroundColor).toEqual('lightgreen');
  });
  it('should display added', () => {
    render(<StringDiff newValue="test" oldValue="testOld" />);
    const diffNode = screen.getByText(/Old/i);
    expect(diffNode.style.backgroundColor).toEqual('salmon');
  });
  it('should change parent dom element', () => {
    const { container } = render(
      <StringDiff component="p" newValue="test" oldValue="testOld" />
    );
    expect(container.querySelector('p')?.textContent).toEqual('testOld');
  });
});
