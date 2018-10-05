// Code your solution in this file!
function logDriverNames(arr) {
  arr.forEach(el => {
    console.log(el.name)
  })
}

function logDriversByHometown(arr, town) {
  arr.forEach(el => {
    console.log(arr, town)
    // return (el.hometown.localeCompare(town) === 0) true : false
  })
}
