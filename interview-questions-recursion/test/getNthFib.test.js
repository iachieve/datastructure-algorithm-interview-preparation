const getNthFib = require('../challenges/getNthFib');

describe('testing getNthFib', () => {
  it('test case #1', () => {
    let r = getNthFib(1);
    expect(r).toBeDefined();
    expect(r).toBe(0);
  });
  it('test case #2', () => {
    let r = getNthFib(2);
    expect(r).toBeDefined();
    expect(r).toBe(1);
  });
  it('test case #3', () => {
    let r = getNthFib(3);
    expect(r).toBeDefined();
    expect(r).toBe(1);
  });
  it('test case #4', () => {
    let r = getNthFib(4);
    expect(r).toBeDefined();
    expect(r).toBe(2);
  });
  it('test case #5', () => {
    let r = getNthFib(5);
    expect(r).toBeDefined();
    expect(r).toBe(3);
  });
  it('test case #6', () => {
    let r = getNthFib(6);
    expect(r).toBeDefined();
    expect(r).toBe(5);
  });
  it('test case #7', () => {
    let r = getNthFib(12);
    expect(r).toBeDefined();
    expect(r).toBe(89);
  });
  it('test case #8', () => {
    let r = getNthFib(30);
    expect(r).toBeDefined();
    expect(r).toBe(514229);
  });
});