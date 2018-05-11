module.exports = {
  numberList: [],
  storeInList: function(num) {
    this.numberList.push(num);
  },
  sortingList: function(nList) {
    nList.sort(function(a,b) {
      return a - b;
    })
    return nList;
  }
}



// var numberList = [5, 3, 2, 3];

// var test = function(list) {
//   list.sort(function(a, b) {
//       return a - b;
//     })
//     console.log(list);
//   };

// test(numberList);

// console.log(numberList)



// module.exports = {
//   numberList: [],
//   storeInList: function(num) {
//     this.numberList.push(num);
//   },
//   sortingList: function(nList) {
//     nList.sort(function(a,b) {
//       return a - b;
//     })
//     // console.log(numberList);
//   }
// }

