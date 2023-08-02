const request = require('supertest');
const app = require('./app');

describe('/worlds', () => {
    it('should return status 200 with world name', async () => {

    await request(app)
      .get('/v1/worlds')
      .expect(200)
      .expect([
        { name: "hello world" },
      ])
  });
});
