// Code your solution in this file!
function logDriverNames(arr) {
  arr.forEach(el => {
    console.log(el.name)
  })
}

function logDriversByHometown(arr, town) {
  arr.forEach(el => {
    console.log(el.hometown) if el.hometown.localeCompare(town)
    // return (el.hometown.localeCompare(town) === 0) ? console.log(el.hometown) : false
  })
}
