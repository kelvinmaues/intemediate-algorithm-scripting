var strs = "A"
switch (strs) {
  case "A":
    arr.push(strs + "T");
    console.log(arr);
    return arr;
    break;
  case "T":
    arr.push(strs + "A");
    return arr;
    break;
  case "C":
    arr.push(strs + "G");
    return arr;
    break;
  case "G":
    arr.push(strs + "C");
    return arr;
    break;
}
