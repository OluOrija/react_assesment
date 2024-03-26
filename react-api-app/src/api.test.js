jest.mock('node-fetch');

const fetch = require('node-fetch');

describe('API Endpoint', () => {
  it('returns a 200 status code', async () => {
    fetch.mockResolvedValue({ status: 200 });
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    expect(response.status).toBe(200);
  });
});
