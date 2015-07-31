import assert from "assert";

import sayHello from "../lib/index.js";

describe("sayHello", function() {

  it("should say hello", function() {

    let result = sayHello("john doe");

    assert.equal(result, "Hello john doe");

  });

});
