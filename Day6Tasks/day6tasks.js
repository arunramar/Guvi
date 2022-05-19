// evens=[1,2,3,4,5,6,7];
// odds  = evens.map(v => v + 1);
// pairs = evens.map(v => ({ even: v, odd: v + 1 }));
// nums  = evens.map((v, i) => v + i);
// console.log(odds);
// console.log(pairs);
// console.log(nums);

// nums=[10,11,20,22];
// fives =[];
// nums.forEach(v => {
//     if (v % 5 === 0)
//         fives.push(v);
//  })
//  console.log(fives)

nums=[1,2,3,4,5,6,7,10,20,25,34,23];
fives = [];
nums.forEach( (v) => {
    if (v % 5 === 0)
        this.fives.push(v);
});
console.log(fives);