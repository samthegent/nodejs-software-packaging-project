const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  test('should return application status', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);

    expect(response.body.status).toBe("Running Successfully");
  });
});