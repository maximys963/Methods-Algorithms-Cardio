console.log("hello world");

// destructuring assignment
let [learn, me, library] = ['Redux','Max','React'];
console.log(learn);
console.log(me);
console.log(library);

let [word1, word2, ...word3] = 'lorem ipsum dolor sit amen grdius la dante agriero'.split(' ');

console.log(word1);
console.log(word2);
console.log(word3);