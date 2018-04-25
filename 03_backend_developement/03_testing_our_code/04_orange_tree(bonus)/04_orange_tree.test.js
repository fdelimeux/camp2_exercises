const orangeTree = require('./04_orange_tree');

// test("Check if possible to pickAnOrange if there is still orange",
//   function(){
//     let testTree = {
//       orangeTree.oranges:20
//     };
//     const result = orangeTree.pickAnOrange(testTree);
//     expect(result).toBe(true);
// });

test("Check if can pickAnOrange if 20 orange",
  function(){
    orangeTree.oranges = 20;
    orangeTree.pickAnOrange();
    const result = orangeTree.oranges;
    expect(result).toBe(19);
});

test("Check if can pickAnOrange if 0 orange",
  function(){
    orangeTree.oranges = 0;

    const result = orangeTree.pickAnOrange();
    expect(result).toBe(false);
});

test("Check if grow 25 if age under 10",
  function(){
    orangeTree.age = 8;
    orangeTree.height = 10;
    orangeTree.ageOneYear();
    const result = orangeTree.height;
    expect(result).toBe(35);
});

for (let i=0;i<105;i++){
test(`Check height if age under ${i + 1}`,
  function(){
    orangeTree.age = i;
    orangeTree.height = 0;
    orangeTree.ageOneYear();
    const result = orangeTree.height;
    let expectedResult;
    if (i < 9) {
      expectedResult = 25;
    } else if (i < 19) {
      expectedResult = 10;
    } else {
      expectedResult = 0;
    }
    expect(result).toBe(expectedResult);
});
}

test("Check if tree died after 100 years",
  function(){
    orangeTree.age = 100;
    orangeTree.ageOneYear();
    const result = orangeTree.alive;
    expect(result).toBe(false);
});

test("Check if tree alive if seed",
  function(){
    orangeTree.alive = false;
    orangeTree.seed();
    const result = orangeTree.alive;
    expect(result).toBe(true);
});

test("Check if height equal to 0 if seed",
  function(){
    orangeTree.height = 30;
    orangeTree.seed();
    const result = orangeTree.height;
    expect(result).toBe(0);
});

test("Check if age equal 0 if seed",
  function(){
    orangeTree.age = 20;
    orangeTree.seed();
    const result = orangeTree.age;
    expect(result).toBe(0);
});

test("Check if orange equal 0 if seed",
  function(){
    orangeTree.oranges = 20;
    orangeTree.seed();
    const result = orangeTree.oranges;
    expect(result).toBe(0);
});

for (let i=0;i<105;i++){
test(`Check orange if age under ${i + 1}`,
  function(){
    orangeTree.age = i;
    orangeTree.oranges = 0;
    orangeTree.ageOneYear();
    const result = orangeTree.oranges;
    let expectedResult;
    if (i >=4 && i < 9) {
      expectedResult = 10;
    } else if (i >= 9 && i < 19) {
      expectedResult = 20;
    } else if (i >= 19 && i < 39) {
      expectedResult = 5;
    } else {
      expectedResult = 0;
    }
    expect(result).toBe(expectedResult);
});
}
