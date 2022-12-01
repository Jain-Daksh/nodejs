const num = 3880123.4575

console.log("usa" + new Intl.NumberFormat('en-Us').format(num));console.log("germany" + new Intl.NumberFormat('de-De').format(num))
console.log("India" + new Intl.NumberFormat('en-In').format(num))

//options

const options = {
  style: "unit",
  unit : "mile-per-hour",
  unit : 'celsius',
}
const currency = {
  style: "currency",
  currency : "EUR",
  currency : "INR",
}
console.log("India" + new Intl.NumberFormat('en-In', options).format(num))
console.log("Uk" + new Intl.NumberFormat('en-GB', currency).format(num))
console.log("India" + new Intl.NumberFormat('en-In', currency).format(num))