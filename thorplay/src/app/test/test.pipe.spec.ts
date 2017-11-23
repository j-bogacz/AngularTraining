import {TestPipe} from './test.pipe';

describe('TestPipe', () => {
  it('create an instance', () => {
    const pipe = new TestPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return 0', () => {
    const pipe = new TestPipe();
    expect(pipe.transform('', '')).toBe(0);
  });
});
