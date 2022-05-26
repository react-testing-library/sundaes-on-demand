import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from '@/js/containers/summaryForm/SummaryForm';

afterEach(cleanup);

describe('Summary form', () => {
  test('Initial conditions', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i }),
      confirmButton = screen.getByRole('button', { name: /confirm order/i });

    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });
  test('checkbox disables button on first click and enables on second click', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i }),
      confirmButton = screen.getByRole('button', { name: /confirm order/i });

    fireEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    fireEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });
});
