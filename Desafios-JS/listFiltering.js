function filter_list(l) {
  // Return a new array with the strings filtered out
  return typeof l  === "number" && l >= 0;  
}

const list = [1,'a','b',0,15];

const result = list.filter(filter_list);

console.log(result);

