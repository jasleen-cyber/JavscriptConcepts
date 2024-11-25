const log = console.log;

// const myObject = {}

const a = {};
const b = {};

// myObject[a] = 'a'; // myObject[key] = value
// log (myObject)
// myObject[b] = 'b';

const myMap = new Map([
  [a, "a"],
  [b, "b"],
]);

//log (myMap)

myMap.set({}, "c");

myMap.set("name", "jasleen");

myMap.set(a, "object a to string key value assigned");

//in map deletion is done by mentioning key

myMap.delete(b);
myMap.delete("name");

log(myMap.has(b));
log(myMap.has(a));
log(myMap.has("name"));

log(myMap.size);

log(myMap);

myMap.clear();

log(myMap);
