const fn = require('./fn');

/*
  toBe
  toEqual
  toStrictEqual
  toBeNull
  toBeUndefined
  toBeDefined
  toBeTruthy
  toBeFalsy
*/

test('1 is 1.', () => {
  expect(1).toBe(1);
});

test('2 plus 3 equals 5.', () => {
  expect(fn.add(2, 3)).toBe(5);
});

test('Takes name and age and returns object.', () => {
  expect(fn.makeUser("Mike", 30)).toEqual({
    name: "Mike",
    age: 30,
  });
});

/*
test('Takes name and age and returns object.', () => {
  expect(fn.makeUser("Mike", 30)).toStrictEqual({
    name: "Mike",
    age: 30,
  });
});
 */

test("null is null.", () => {
  expect(null).toBeNull();
});

test("0 is false.", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

test("'Hello, World' is true.", () => {
  expect('Hello, World').toBeTruthy();
});

test("Id must be 7 characters or less.", () => {
  const id = 'KHJcode';
  expect(id.length).toBeLessThanOrEqual(7);
});

test("Password is 4 characters.", () => {
  const password = '1234';
  expect(password.length).toBe(4);
});

test("Password is 4 characters.", () => {
  const password = '4321';
  expect(password.length).toEqual(4);
});

test("0.1 plus 0.2 equal 0.3.", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});


