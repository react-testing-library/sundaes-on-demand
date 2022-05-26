import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  test('checkbox disables button on first click and enables on second click', async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i }),
      confirmButton = screen.getByRole('button', { name: /confirm order/i });

    await user.click(checkbox);
    expect(confirmButton).toBeEnabled();

    await user.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });
});
