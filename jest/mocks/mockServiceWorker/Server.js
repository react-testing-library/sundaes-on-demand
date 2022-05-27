import { setupServer } from 'msw/node';
import { handlers } from '@/jest/mocks/mockServiceWorker/Handlers';

// this configures a request mocking server with the given request
export const server = setupServer(...handlers);
