const fn = {
  getName: callback => {
    const name = 'KHJcode';
    setTimeout(() => {
      callback(name);
    }, 2000);
  },
  getAge: () => {
    const age = 16;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(age);
      }, 2000);
    });
  },
};

module.exports = fn;
