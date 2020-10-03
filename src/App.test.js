import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

afterEach(cleanup);

describe('App render', () => {
  test('renders music food div', () => {
    const { getByText } = render(<App />);
    expect(getByText('Music Food')).toBeInTheDocument();
  });

  test('snapshot', () => {
    const { getByText } = render(<App />);
    expect(getByText('Music Food')).toMatchSnapshot();
  });
});
