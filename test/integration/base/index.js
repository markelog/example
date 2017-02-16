describe('GET /', function() {
  it('respond with "hello world"', () => {
    return request(app).get('/').expect(200);
  });
});
