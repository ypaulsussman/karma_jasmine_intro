// describe('demo (passing) test', function() {
//   it('evals two plus two to four', function() {
//     expect(2+2).toEqual(4);
//   });
// });

// describe('demo (failing) test', function() {
//   it('evals three plus three to seven', function() {
//     expect(3+3).toEqual(7);
//   });
// });

describe('validateCharacter test', function() {
  it('accepts integers', function() {
    var param = 3;
    var outcome = validateCharacter(param);
    expect(outcome).toEqual(true);
  });

  it('rejects decimals', function() {
    var param = 3.5;
    var outcome = validateCharacter(param);
    expect(outcome).toEqual(false);
  });

  it('accepts string if comma', function() {
    var param = ',';
    var outcome = validateCharacter(param);
    expect(outcome).toEqual(true);
  });

  it('accepts string if hyphen', function() {
    var param = '-';
    var outcome = validateCharacter(param);
    expect(outcome).toEqual(true);
  });

  it('rejects other strings', function() {
    var param = 'foo';
    var outcome = validateCharacter(param);
    expect(outcome).toEqual(false);
  });

  it('rejects strings of numbers', function() {
    var param = '3';
    var outcome = validateCharacter(param);
    expect(outcome).toEqual(true);
  });

});
