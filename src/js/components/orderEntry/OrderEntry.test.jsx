import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
//server
import { server } from '@/jest/mocks/serviceWorker/Server';
//constants
import { baseUrl } from '@/js/constants/Constants';
//components
import OrderEntry from '@/js/components/orderEntry/OrderEntry';

describe('OrderEntry component', () => {
  test('Handles error for scoops and toppings routes', async () => {
    server.resetHandlers(
      rest.get(`${baseUrl}/scoops`, (req, res, ctx) => res(ctx.status(500))),
      rest.get(`${baseUrl}/toppings`, (req, res, ctx) => res(ctx.status(500)))
    );

    render(<OrderEntry />);

    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(2);
  });
});
