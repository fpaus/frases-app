import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

it('Renders frase', () => {
  const element = render(<App />);
  const utils = element;
  const adderInput = utils.getByLabelText('adder-input');
  const adderBtn = utils.getByLabelText('adder-btn');
  fireEvent.change(adderInput, { target: { value: 'NUEVA FRASE' } });
  fireEvent.click(adderBtn);
  expect(screen.getByText('NUEVA FRASE')).toBeDefined();
});
