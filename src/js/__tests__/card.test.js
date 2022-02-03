import cardsData from '../cardsData';
import CardDataParser from '../CardDataParser';
import CardIdentifier from '../CardIdentifier';

const checkParameters = CardDataParser.getCheckParameters(cardsData);
const biggestFirstDigits = CardDataParser.getBiggestFirstDigits(cardsData);
const cardIdentifier = new CardIdentifier(checkParameters, biggestFirstDigits);

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

test('class "CardIdentifier" handles invalid input correctly', () => {
  let result = cardIdentifier.identifyCard('1111111111111111');
  expect(result).toBeUndefined();

  result = cardIdentifier.identifyCard('6388744863839090');
  expect(result).toBeUndefined();
});
