// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}

describe("Vowels Count Tests", function () {
  it("should return 5 for 'abracadabra'", function () {
    assert.strictEqual(getCount("abracadabra"), 5);
  });
});