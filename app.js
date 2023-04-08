const numberArrays = [2, 4, 6, 8, 10, 12];
const lastNumber = numberArrays.pop(); // remove the last element and store it in a variable
numberArrays.unshift(lastNumber); // add the stored last element as the first element

console.log(numberArrays); // output the modified array to the console


const products = [
  { productTitle: 'Product 1', productPrice: 10.99 },
  { productTitle: 'Product 2', productPrice: 15.99 },
  { productTitle: 'Product 3', productPrice: 20.99 }
];

console.log(products)


const numbers = [2, 4, 6, 8, 10];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
const average = sum / numbers.length;

console.log(average);


const phone = {
  phoneName: "Samsung Galaxy S21",
  phoneDescription: "smartphone with 128GB memory",
  phonePrice: 999,
  shopAddresses: ["123 Main St", "456 High St", "789 Center Ave"],
  phoneMemoryInGB: 128
};

console.log(phone);


const phone2 = {
  phoneName: "Samsung Galaxy S21",
  phonePrice: 999,
  shopAddresses: ["123 Main St"],
};

console.log(phone2);