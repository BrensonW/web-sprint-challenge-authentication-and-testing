const { default: expectCt } = require('helmet/dist/middlewares/expect-ct');
const supertest = require('supertest');
const server = require('../api/server');
const { intersect } = require('../database/dbConfig');
const db = require('../database/dbConfig');

beforeAll(async () => {
    await db('users'),truncate();
});

describe('Users integration tests', () => {
    it('Registers a new user', async () => {
        const res = await supertest(server)
            .post('/register')
            .send({ username: 'Brenson', password: '7777777' })
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe('application/json')
    });
});
