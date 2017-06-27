//During the test the env variable is set to test
process.env.NODE_ENV = 'test'; //Just being safe. 

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Lrs', () => {
    // beforeEach((done) => { //Before each test we empty the database
    //     Book.remove({}, (err) => { 
    //        done();         
    //     });     
    // });

/*
  * Test the /GET route
  */
  describe('/GET lr', () => {
      it('it should GET all the lrs', (done) => {
        chai.request(server)
            .get('/lrs')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.Items.should.be.a('array');
                res.body.Items.length.should.be.eql(0);
              done();
            });
      });
  });

	

});
