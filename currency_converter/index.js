const prompt = require('prompt-sync')();

const currencies = {
  dkk: {
    label: {
      no: "Danske kroner",
      en: "Danish krone",
    },
    factor: 1.34,
  },
  eur: {
    label: {
      no: "Euro",
      en: "Euro",
    },
    factor: 10,
  },
  usd: {
    label: {
      no: "Amerikanske dollar",
      en: "American dollar",
    },
    factor: 8,
  },
};

function convertToEuro(value) {
  return Number(value) / 10;
}

function convertToDollar(value) {
  return Number(value) / 8;
}

function convertToDanish(value) {
  return Number(value) / 1.34;
}

const language = prompt('Norwegian(no) or English(en)?: ')

let currency;
let value;
let message = '';
let result;

if(language.toLowerCase() === 'no') {
  value = prompt("Hvilken verdi skal du skal konvertere: ");
  for (const currency of Object.entries(currencies)) {
    const key = currency[0];
    const values = currency[1];
    message += `${values.label["no"]}(${key}) | `;
  }
  currency = prompt(message);
} else if (language.toLowerCase() === "en") {
  value = prompt("What value to convert: ");
  for (const currency of Object.entries(currencies)) {
    const key = currency[0];
    const values = currency[1];
    message += `${values.label["en"]}(${key}) | `;
  }
  currency = prompt(message);
} else {
  console.log("Language not valid")
}

 if (currency === "eur") {
   result = convertToEuro(value);
 } else if (currency === "dkk") {
   result = convertToDanish(value);
 } else if (currency === "usd") {
   result = convertToDollar(value);
 } else {
   result = 0;
 }

 console.log(result);