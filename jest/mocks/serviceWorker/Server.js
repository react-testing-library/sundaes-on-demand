import { setupServer } from 'msw/node';
import { handlers } from '@/jest/mocks/serviceWorker/Handlers';

// this configures a request mocking server with the given request
export const server = setupServer(...handlers);
