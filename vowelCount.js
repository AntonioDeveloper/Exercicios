function getCount(str) {
  var vowelsCount = 0;
  
  // enter your majic here
  
  const patt = /[aáàeéèiíoóuú]/g;
  const result = str.match(patt);
  if(!result){
  	vowelsCount = 0;
  } else {
  	vowelsCount = result.length;
  }
  
  
  console.log(result);
  console.log(vowelsCount);
  
  //return vowelsCount;
}

getCount("my pyx")

