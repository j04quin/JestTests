const {
  fromEuroToDollar,
  fromYenToPound,
  fromDollarToYen,
} = require("./app.js");

test("One euro should be 1.07 dollars", function () {
  // Import the function from app.js

  const dollars = fromEuroToDollar(3.5);
  const expected = 3.5 * 1.07;

  expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("One yen should be x pounds", () => {
  const pounds = fromYenToPound(3.4);
  const expected = (3.4 / 156.5) * 0.87;

  expect(pounds).toBe(expected);
});

test("One dollar should be x yens", () => {
  const pounds = fromDollarToYen(3.4);
  const expected = (3.4 / 1.07) * 156.5;

  expect(pounds).toBe(expected);
});
