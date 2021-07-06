const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });

      it('should work when its a valid name', () => {
        Videogame.create({ name: 'Super Mario Bros' });
      });
    });


    // describe('release_date', () => {
    //   it('should throw an error if name is null', (done) => {
    //     Videogame.create({})
    //       .then(() => done(new Error('It requires a valid release')))
    //       .catch(() => done());
    //   });

    //   it('should be a date format field  ', () => {
    //     Videogame.create({ release_date: '2010-15-5' });
    //   });
    // });

    describe('id', () => {
      it('should throw an error if id is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid id')))
          .catch(() => done());
      });

      it('should be a id format field  ', () => {
        Videogame.create({ id: 'd3aa88e2-c754-41e0-8ba6-4198a34aa0a2'});
      });
    });

    describe('description', () => {
      it('should throw an error if description is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid description')))
          .catch(() => done());
      });

      it('should be a id format field  ', () => {
        Videogame.create({ description: 'Salio a correr'});
      });
    });

    describe('platforms', () => {
      it('should throw an error if platforms is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid platforms')))
          .catch(() => done());
      });

      it('should be a id format field  ', () => {
        Videogame.create({ platforms: 'PC'});
      });
    });
  });
});
