const accountId = 12345
let accountEmail = "ahilya@google.com" //Always prefer let keyword because of scope problem
var accountPassword = "12121212"
accountCity = "Pune"
let accountState   //undefined

accountEmail = "kokare@google.com"
accountPassword = "098765"
accountCity = "Mumbai"
// const accountId = 4567   //cann't divide cont variable

console.log(accountId)

/*prefer not to use var because of issue in block scope and functional scope  */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])