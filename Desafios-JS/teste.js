function HTMLElements(str) {

  // code goes here  
  let i = 0;
  let open = "";
  let close = "";
  let next = "";
  let pos = 0;
  let leftSign = 0;
  let rightSign = 0;
  let closingTag = str.indexOf("</");
  let countPrev = 0;
  let countNext = 0;
  let openTags = [];
  let cloTags = [];

  for (i; i <= str.length; i++) {
    if (str.charAt(i) === "<") {
      leftSign = i;
      if (str.charAt(i) === ">") {
        rightSign = i;
        open = str.substring(leftSign, rightSign + 1);
        openTags.push(open);
        pos = pos + open.length;
        leftSign = pos;
        open = "";
      }
      if (str.charAt(i) === "/") {
        leftSign = str.charAt(i - 1);
        if (str.charAt(i) === ">") {
          rightSign = i;
          close = str.substring(leftSign, rightSign + 1);
          cloTags.push(close);
          pos = pos + close.length;
          leftSign = pos;
          close = "";
        }
      }
    }
    rightSign = pos + 1 + str.search(">");
    // next = str.charAt(open.length);
    close = str.substring(closingTag);
    cloTags.push(close);
    // countPrev = 0 + 1
    // leftSign = rightSign + 1;
    // //rightSign = 
  }

  console.log(pos);
  console.log(cloTags);

  // for (i = 0; i <= str.length; i++){
  // }

  //   return str; 

}

// // keep this function call here 
// console.log(HTMLElements(readline()));

HTMLElements("<div><div><b></b></div></p>");