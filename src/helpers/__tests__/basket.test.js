import { add_item } from '../basket'

test('empy item does not update basket', () => {
  expect(add_item({}, {})).toBe({});
})
