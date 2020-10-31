function removeSmallest(numbers) {
  
  //throw "TODO: removeSmallest";
  
  const orig = [...numbers];
  
  
 const arrangedArray = numbers.sort((a, b) => {
  return (a - b);
});
 
  const smallest = arrangedArray[0];
  
   const firstIndex = orig.findIndex(number => {
     return number === smallest;
   });   
  
 
  orig.splice(firstIndex,1);
  
  return orig;
 
};  

removeSmallest([83, 279, 338, 246, 272, 290, 75, 42, 76, 14, 128]); 
