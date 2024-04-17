/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];


/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
  newObj[key] = val;
  return newObj;
}



/** Return a new object with a key removed.
 * I have discovered while researching online and I checked the solution after and it said this is okay!
 */

const removeKey = (obj, key) => {
    const { [key]: removed, ...newObj } = obj;
    return newObj;
};


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });



/** Return a new object with a modified key and value. */

const update = (obj, key, val) => ({ ...obj, [key]: val });
