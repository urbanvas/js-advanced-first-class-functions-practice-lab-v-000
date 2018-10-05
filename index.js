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
  newArr = []
  arr.sort(function (a, b) {
    if ((a.revenue - b.revenue) > 0) {
      newArr.push(a)
    } else if ((a.revenue - b.revenue) < 0) {
      newArr.push(b)
    }
  })
}
