function Palindrome(str) {
  let backward = "";
  let forward = "";
  for (let i = str.length; i >= 0; i--) {
    if (str.charAt(i) === " ") {
      backward = backward + str.charAt(i).trim();
    } else {
      backward = backward + str.charAt(i)
    }
  }

  for (let j = 0; j <= str.length; j++) {
    if (str.charAt(j) === " ") {
      forward = forward + str.charAt(j).trim();
    } else {
      forward = forward + str.charAt(j)
    }
  }
  console.log(backward);
  console.log(forward);
  if (backward === forward) {
    console.log("true");
  }
  return str;
}

Palindrome("never odd or even");