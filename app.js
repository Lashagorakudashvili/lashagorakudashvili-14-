const numberArrays = [2, 4, 6, 8, 10, 12];
const lastNumber = numberArrays.pop();
numberArrays.unshift(lastNumber);

console.log(numberArrays);


const products = [
  {
    productTitle: 'Title1',
    productPrice: 25.99
  },
  {
    productTitle: 'Title2',
    productPrice: 18.50
  },
  {
    productTitle: 'Title3',
    productPrice: 99.00
  }
];

console.log(products)


const numbers = [10, 23, 45, 18, 7];

const sum = numbers.reduce((acc, cur) => acc + cur, 0);

const average = sum / numbers.length;

console.log(average);


const phone = {
  phoneName: "Samsung Galaxy S21",
  phoneDescription: "smartphone with 128GB memory",
  phonePrice: 999,
  shopAddresses: ["123 Main St", "456 High St", "789 Center Ave"],
  phoneMemoryInGB: 128
};

console.log(`Phone name is (${phone.phoneName}), phone price is (${phone.phonePrice}) and you can buy it at (${phone.shopAddresses[0]})`);