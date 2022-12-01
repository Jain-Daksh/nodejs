//http://www.lingoes.net/en/translator/langcode.htm   for iso code
// mdn intl
const now = new Date();
let labeldatetextContextUSA = new Intl.DateTimeFormat('en-US').format(now)
let labeldatetextContextUK = new Intl.DateTimeFormat('en-GB').format(now)
console.log("usa" + labeldatetextContextUSA)
console.log("UK" + labeldatetextContextUK)

//customize
const options = {
  day: 'numeric',
  month: 'long',
  year: '2-digit',
  weekday: 'long',
  hour: 'numeric',
  minute: 'numeric',
  
}
labeldatetextContextUK = new Intl.DateTimeFormat('en-GB' , options).format(now)
console.log("UK after customize  =>  " + labeldatetextContextUK)

//from userbrowser
// const locate = navigator.language
// labeldatetextContextUK = new Intl.DateTimeFormat('en-GB' ,  locate,options).format(now)
// console.log("UK after customize  =>  " + labeldatetextContextUK)
