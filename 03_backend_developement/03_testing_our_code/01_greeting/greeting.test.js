const greeting = require("./greeting");

test("Check return if name set",
  function () {
    const result = greeting.greet("Test");
    expect(result).toBe("Hello TEST!");
  }
);

test("Check return if name not set",
  function () {
    const result = greeting.greet("");
    expect(result).toBe("Hello WORLD!");
  }
);
