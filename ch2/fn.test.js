// done
// return Promise
// async

const fn = require('./fn');


test("3초 후에 받아온 이름은 KHJcode", done => {
  function callback(name) {
    expect(name).toBe('KHJcode');
    done();
  }
  fn.getName(callback);
});

test("3초 후에 받아온 나이는 16", async () => {
  await expect(fn.getAge()).resolves.toBe(16);
 });

test("3초 후에 받아온 나이는 16", async () => {
  const age = await fn.getAge();
  expect(age).toBe(16);
});

test("3초 후에 받아온 나이는 16", () => {
  return fn.getAge().then(age => expect(age).toBe(16));
});