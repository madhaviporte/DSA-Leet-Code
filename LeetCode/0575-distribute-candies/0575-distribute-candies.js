/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let canEat= candyType.length/2;
    let our_set= new Set(candyType);//removes the duplicates
    let uniqueCount =our_set.size;//use .size for sets

    //OR use this instead like convert set to array
    // let uniqueArray = [...our_set]; // Convert Set to Array
    // let uniqueCount = uniqueArray.length; // Now use .length

    return Math.min(canEat,uniqueCount);
};