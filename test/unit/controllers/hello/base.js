const Hello = require('../../../../src/controllers/hello');

describe.skip('Hello controller', () => {
  let instance;

  beforeEach(() => {
    instance = new Hello({});
  });

  describe('hello method', () => {
    it('return "hello world"', () => {
      expect(instance.hello('world')).to.equal('Hello world');
    });
  });
});
