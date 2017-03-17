function whatIsInAName(collection, source) {
  var arr = [];
  for (var i = 0; i < collection.length; i++) {
    for (var nameKey in source) {
      for (var collectionKey in collection[i]) {
        if (collection[i].hasOwnProperty(nameKey)) {
          if (collection[i][collectionKey] == source[nameKey]) {
            arr.push(collection[i]);
          }
        }
      }
    }
  }
  console.log(arr);
  return arr
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// should return [{ first: "Tybalt", last: "Capulet" }]
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
// should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
// should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]
