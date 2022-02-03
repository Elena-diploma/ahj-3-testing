import cardsData from '../cardsData';
import CardDataParser from '../CardDataParser';
import CardIdentifier from '../CardIdentifier';

const checkParameters = CardDataParser.getCheckParameters(cardsData);
const biggestFirstDigits = CardDataParser.getBiggestFirstDigits(cardsData);
const cardIdentifier = new CardIdentifier(checkParameters, biggestFirstDigits);

  test.each([
    ['344184594829928', 'American-express'],
    ['349494453040847', 'American-express'],
    ['370147395923668', 'American-express'],
    ['371500843920075', 'American-express'],

    ['36674460906571', 'Diners-club'],
    ['3697342532567177', 'Diners-club'],
    ['36723075608276343', 'Diners-club'],
    ['364846381549872242', 'Diners-club'],
    ['3645226875758998472', 'Diners-club'],

    ['6226153180538789', 'Discover'],
    ['62215081640423399', 'Discover'],
    ['622499049966470607', 'Discover'],
    ['6226488169659213010', 'Discover'],

    ['2201899061191720', 'MIR'],
    ['22033462521784956', 'MIR'],
    ['220433693734721288', 'MIR'],
    ['2204594841690300871', 'MIR'],

    ['2308211509312508', 'Mastercard'],
    ['2610647983348042', 'Mastercard'],
    ['5295471076855846', 'Mastercard'],
    ['5493046404508869', 'Mastercard'],

    ['4388529697885', 'Visa'],
    ['4429501958604', 'Visa'],
    ['4929039514995180', 'Visa'],
    ['4813639613644982', 'Visa'],
  ])(('the number %i belongs to %s pay system'), (input, paySystem) => {
    expect(cardIdentifier.identifyCard(input)).toBe(paySystem);
  });

test.each([
  ['344184594829928', 'American-express'],
  ['349494453040847', 'American-express'],
  ['370147395923668', 'American-express'],
  ['371500843920075', 'American-express'],

  ['36674460906571', 'Diners-club'],
  ['3697342532567177', 'Diners-club'],
  ['36723075608276343', 'Diners-club'],
  ['364846381549872242', 'Diners-club'],
  ['3645226875758998472', 'Diners-club'],

  ['6226153180538789', 'Discover'],
  ['62215081640423399', 'Discover'],
  ['622499049966470607', 'Discover'],
  ['6226488169659213010', 'Discover'],

  ['2201899061191720', 'MIR'],
  ['22033462521784956', 'MIR'],
  ['220433693734721288', 'MIR'],
  ['2204594841690300871', 'MIR'],

  ['2308211509312508', 'Mastercard'],
  ['2610647983348042', 'Mastercard'],
  ['5295471076855846', 'Mastercard'],
  ['5493046404508869', 'Mastercard'],

  ['4388529697885', 'Visa'],
  ['4429501958604', 'Visa'],
  ['4929039514995180', 'Visa'],
  ['4813639613644982', 'Visa'],
])(('the number %i belongs to %s pay system'), (cardNumber) => {
  input.value = cardNumber;
  submit.click();
  expect(input.classList.contains('valid')).toBeTruthy();
});
