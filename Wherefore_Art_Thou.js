function whatIsInAName(collection, source) {
// using the filter method to iterate trough the object array and filter the values
// that pass in the test
return collection.filter(function (obj) {
  // loop for source object
  for (var nameKey in source) {
    if (!obj.hasOwnProperty(nameKey) || obj[nameKey] !== source[nameKey]) {
      return false;
    }
  }
  return true;
});
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// should return [{ first: "Tybalt", last: "Capulet" }]
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
// should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
// should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]
