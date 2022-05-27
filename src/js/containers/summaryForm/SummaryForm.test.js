import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '@/js/containers/summaryForm/SummaryForm';

afterEach(cleanup);

const termsAndConditionsText = /terms and conditions/i,
  popoverText = /no ice cream will actually be delivered/i;

describe('Summary form', () => {
  test('Initial conditions', () => {
    render(<SummaryForm />);
    const termsAndConditions = screen.getByText(termsAndConditionsText),
      confirmButton = screen.getByRole('button', { name: /confirm order/i });

    expect(termsAndConditions).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });
  test('checkbox disables button on first click and enables on second click', async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);
    const termsAndConditions = screen.getByText(termsAndConditionsText),
      confirmButton = screen.getByRole('button', { name: /confirm order/i });

    await user.click(termsAndConditions);
    expect(confirmButton).toBeEnabled();

    await user.click(termsAndConditions);
    expect(confirmButton).toBeDisabled();
  });
  test('popover response to hover', async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);

    const termsAndConditions = screen.getByText(termsAndConditionsText),
      nullPopover = screen.queryByText(popoverText);

    //popover starts out hidden
    expect(nullPopover).not.toBeInTheDocument();

    //popover appears upon mouseover of checkbox label
    await user.hover(termsAndConditions);
    const popover = screen.getByText(popoverText);
    expect(popover).toBeInTheDocument();

    //popover disappears when we mouse out
    await user.unhover(termsAndConditions);
    const nullPopoverAgain = screen.queryByText(popoverText);
    expect(nullPopoverAgain).not.toBeInTheDocument();
  });
});
