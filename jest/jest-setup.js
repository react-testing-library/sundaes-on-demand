import '@testing-library/jest-dom';
//mock service worker setup
import { server } from '@/jest/mocks/mockServiceWorker/Server';
import { cleanup } from '@testing-library/react';

//establish API mocking before all tests
beforeAll(() => server.listen());

/*Reset any request handlers that we may add during the test,
so they don't affect other test*/
afterEach(() => {
  server.restoreHandlers();
  cleanup();
});

//clean up after the tests are finished
afterAll(() => {
  server.close();
});
