import Widget from '../Widget';

test.each([
  ['true for valid num', '4929348827706170', true],
  ['false for invalid num', '5121849023100', false],
])(('it should be %s'), (_, input, expected) => {
  expect(Widget(input)).toBe(expected);
});
