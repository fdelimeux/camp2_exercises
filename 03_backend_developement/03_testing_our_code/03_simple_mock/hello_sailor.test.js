const helloSailor = require('./hello_sailor');

test("Check return of console log if empty",
  function() {
    console.log = jest.fn();
    helloSailor();
    expect(console.log).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
  }
);

test("Check return of console log if params",
  function() {
    console.log = jest.fn();
    helloSailor("Fred");
    expect(console.log).toHaveBeenCalledWith("Howdy Fred!");
  }
);
