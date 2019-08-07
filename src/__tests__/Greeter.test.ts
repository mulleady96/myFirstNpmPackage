import { Greeter } from '../index';
test('My Greeter', () => {
  expect(Greeter('Andrew')).toBe('Hello Andrew');
});