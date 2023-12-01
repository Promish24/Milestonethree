// __tests__/Login.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Login from '../compontent/Login';

  jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper', () => {});



describe('Login Component', () => {
  test('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Login />);
    
    expect(getByText('CLINICAL DBMS')).toBeDefined();
    expect(getByPlaceholderText('Enter User Name ')).toBeDefined();
    expect(getByPlaceholderText('Enter Password')).toBeDefined();
    expect(getByText('Login')).toBeDefined();
    expect(getByText('Register')).toBeDefined();
  });

  test('handles input changes', () => {
    const { getByPlaceholderText } = render(<Login />);
    const usernameInput = getByPlaceholderText('Enter User Name ');
    const passwordInput = getByPlaceholderText('Enter Password');

    fireEvent.changeText(usernameInput, 'testUser');
    fireEvent.changeText(passwordInput, 'testPassword');

    expect(usernameInput.props.value).toBe('testUser');
    expect(passwordInput.props.value).toBe('testPassword');
  });

  test('calls handlelogin on button press', async () => {
    const { getByText, getByPlaceholderText } = render(<Login />);
    const loginButton = getByText('Login');
    const usernameInput = getByPlaceholderText('Enter User Name ');
    const passwordInput = getByPlaceholderText('Enter Password');

    fireEvent.changeText(usernameInput, 'testUser');
    fireEvent.changeText(passwordInput, 'testPassword');

    fireEvent.press(loginButton);

    // You might need to use waitFor() if there are async operations in handlelogin
    await waitFor(() => {
      // Add assertions based on the expected behavior of handlelogin
    });
  });

  test('navigates to Register screen on Register button press', () => {
    const { getByText } = render(<Login />);
    const registerButton = getByText('Register');

    fireEvent.press(registerButton);

    // Add assertions based on the expected navigation behavior
  });
});