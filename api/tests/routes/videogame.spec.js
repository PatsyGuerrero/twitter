/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  id:'d3aa88e2-c754-41e0-8ba6-4198a34aa0a2',
  name: 'Super Mario Bros',
  release_date: '2015-10-8',
  description:'Salio a correr',
  platforms:'PC',
  selection:'2',


};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));


  beforeEach(() => Videogame.sync({ force: true })
  .then(() => {
    return Promise.all([Videogame.create(videogame)])
  }));
  
  describe('GET /videogames/data', () => {
    it('should be json', () =>
      // agent.get('/videogames').expect(200)
      {return agent.get('/videogames/data').expect('Content-Type', /json/)}
    );

    it('should get 200', () =>
    agent.get('/videogames/data').expect(200)
    );

    it('should get 200', () =>
    agent.get('/videogames/data').then(res => expect(res.body).to.be.an('array'))
    );

    // it('should get 200', () =>
    // agent.get('/videogames/data').then(res => expect(res.body[0]).to.be.an('array'))
    // );

  });

  describe('GET /videogame/idVideogame', () => {
    it('should be json', () =>
      // agent.get('/videogames').expect(200)
      agent.get('/videogames/data').expect(200)
    );
  });

  describe('GET /genres', () => {
    it('should be json', () =>
      // agent.get('/videogames').expect(200)
      agent.get('/genres').expect(200)
    );
  });

  describe('POST /videogame', () => {
      it("it should responds with 200", (done) => {
        agent
          .post("/videogame")
          .send({ name: "Resident Evil",
          release_date: "2015-10-8",
          description: "JMatar zombies",
          rating: 1.45,
          platforms:"PC",
          selection: ['2']
        }).expect(200), done() })
  });
  
});
