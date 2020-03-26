import { sort_by } from '../sorting'

test('handle empty array', () => {
  expect(sort_by([], "")).toBe([]);
})
