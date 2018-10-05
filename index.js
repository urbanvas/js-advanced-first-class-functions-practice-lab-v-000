// Code your solution in this file!
function logDriverNames(arr) {
  arr.forEach(el => {
    console.log(el.name)
  })
}

function logDriversByHometown(arr, town) {
  arr.forEach(el => {
    if (el.hometown.localeCompare(town) === 0) {
      console.log(el.name)
    }
  })
}

function driversByRevenue(arr) {
  arr.sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  })
}
