const assert = require("assert")
const hs = require("./format").hs

describe("#format", () => {
  it("#hs should make text human readable", () => {
    const res = hs("fooBar")
    assert.match(res, /Foo\ bar/)
  })
})
