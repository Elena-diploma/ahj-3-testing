import cardsData from '../cardsData';
import CardDataParser from '../CardDataParser';
import Widget from '../Widget';

const biggestFirstDigits = CardDataParser.getBiggestFirstDigits(cardsData);

test.each([
  ['visa', '4929348827706170', 'visa'],
  ['mastercard', '5555555555554444', 'mastercard'],
  ['american-express', '371449635398431', 'american-express'],
  ['discover', '6011235596645859', 'discover'],
  ['diners', '30082661266322', 'diners'],
  ['mir', '2202200975987809', 'mir'],
])(('it should be %s'), (_, input, expected) => {
  expect(biggestFirstDigits(input)).toBe(expected);
});

test.each([
  ['true for valid num', '4929348827706170', true],
  ['false for invalid num', '5121849023100', false],
])(('it should be %s'), (_, input, expected) => {
  expect(Widget(input)).toBe(expected);
});
