const myArray = [1,2,3,4,5];
 

/* const myArray = [1,2,3,4,5,5,5,5,5,5,5,2,2,2,2,1,1,1,8,8,85,5];
 */

const mySet = new Set(myArray);

const log = console.log;
 log(myArray)
 log(mySet)


mySet.add(6)
mySet.add('jasleen')
mySet.add({course : 'node.js'})
mySet.add([10,11,12])


log(myArray)
log(mySet)


mySet.delete(5);
mySet.delete('jasleen'); 

mySet.forEach( x => x.course === 'node.js' ? mySet.delete(x) : x )



log(mySet);

log(mySet.has(4));
log(mySet.size);

mySet.clear()
log(mySet);





