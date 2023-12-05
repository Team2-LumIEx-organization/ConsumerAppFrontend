import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeContextProvider } from '../../../../context/themeContext';
import Modal from '../index';



test('Modal Component renders without crashing', () => {
  const { getByTestId } = render(
    <ThemeContextProvider>
      <Modal open={true} toggle={() => { }} />
    </ThemeContextProvider>
  );
  expect(getByTestId('modal-wrapper')).toBeInTheDocument();
});


test('Modal Component renders children inside the content wrapper', () => {
  const { getByTestId } = render(
    <ThemeContextProvider>
      <Modal open={true} toggle={() => {}}>
        <div data-testid="test-child">Test Child</div>
      </Modal>
    </ThemeContextProvider>
  );
  expect(getByTestId('test-child')).toBeInTheDocument();
});

test('Modal Component calls the toggle function when the close wrapper is clicked', () => {
  const toggleMock = jest.fn();
    const { getByTestId } = render(
    <ThemeContextProvider>
      <Modal open={true} toggle={toggleMock} />
    </ThemeContextProvider>
  );
  fireEvent.click(getByTestId('close-wrapper'));
    expect(toggleMock).toHaveBeenCalled();
});

