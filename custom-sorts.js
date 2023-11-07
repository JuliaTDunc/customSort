function ageSort(users) {
  return users.sort((a,b) => a.age - b.age)
}

function oddEvenSort(arr) {
  return arr.sort((a,b) => {
    if(a % 2 === 1 && b % 2 === 0) return -1
    if(a % 2 === 0 && b % 2 === 1) return 1 
    return a - b;
 })
}

function validAnagrams(s, t) {
 return  (s.split('').sort().join() === t.split('').sort().join())
}

function reverseBaseSort(arr) {
  return arr.sort((a, b) => {
    let logA = Math.floor(Math.log10(a))
    let logB = Math.floor(Math.log10(b))
    if(logA === logB) {
      return a - b;
    }
    return b - a;
    
  })
}

function frequencySort(arr) {
  return arr.sort((a, b) => {
    if(b - a > 0) return 1;
    if(b - a < 0) return -1;
    return a - b;
  })


}
//1(yes swap)
//-1(same)

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
