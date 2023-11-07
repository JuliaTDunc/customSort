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
  let obj = {};
  for(let el of arr) {
    if(!obj[el[count]]) {
      count[arr[el]] = 0;
    } else {
      count[arr[i]]++
    }
  }
  return arr.sort((a, b) => {
    if(count[a] === count[b]) return b - a;
    else if(count[a] > count[b]) return 1;
    else return -1;
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
