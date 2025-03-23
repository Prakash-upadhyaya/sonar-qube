import { fireEvent, render } from '@testing-library/react-native';
import Home from '../src/screens/Home';
const mockHandleClick = jest.fn();
// describe('Home', () => {
//     test('should render home', () => {
//         const { getByText, getByTestId } = render(<Home />);
//         const btn = getByTestId('click-btn');
//         fireEvent.press(btn);
//         expect(mockHandleClick).toHaveBeenCalled()

//         const text = getByText('1')

//         expect(text).toEqual(1)
//     })
// })

describe('Home Component', () => {
    it('increments the counter on button press', () => {
        const { getByTestId, getByText } = render(<Home />);

        const button = getByTestId('click-btn');
        const counter = getByText('0'); // Initial state value

        fireEvent.press(button);

        expect(getByText('1')).toBeTruthy(); // Ensures the state updates to 1

        fireEvent.press(button);

        expect(getByText('2')).toBeTruthy(); // Ensures the state updates to 2
    });
});
