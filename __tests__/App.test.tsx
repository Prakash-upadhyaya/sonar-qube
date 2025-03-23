import { render, waitFor, fireEvent, } from '@testing-library/react-native'
import App from '../App'
import React from 'react'


jest.mock('@react-navigation/native', () => ({
    NavigationContainer: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock('@react-navigation/native-stack', () => ({
    createNativeStackNavigator: jest.fn(() => {
        const Screen = ({ children }: { children: React.ReactNode }) => children;
        const Navigator = ({ children }: { children: React.ReactNode }) => children;
        return { Navigator, Screen };
    },)
}));
// jest.mock('./src/screens/Home', () => {
//     const { Text } = require('react-native')
//     return () => <Text>Home Screen</Text>;
// });

describe("Home", () => {
    it("should render", async () => {
        const { getByText } = render(<App />);

        // expect(getByText('Home Screen')).toBeTruthy();

    })
})


