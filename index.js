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
  return arr.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  })
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name)
  })

const totalRevenue = function (arr) {
  return arr.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total
  })
}
