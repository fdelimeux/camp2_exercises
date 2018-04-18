const toWords = require('./to_words')

test("Check if return correct value",
  function() {
    result = toWords("Check This Sentence");
    expect(result).toEqual(['Check','This','Sentence']);
  }
);

test("Check if exclude ;",
  function() {
    result = toWords("Check This ; Charactere");
    expect(result).not.toEqual(['Check','This',';','Charactere']);
  }
);
