function toCase(text) {
  // write your code herefunction toCase(str) {
  if (str === "") {
    return "-";  // ✅ requirement ke mutabiq
  }
  return str.toLowerCase() + "-" + str.toUpperCase();
}
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
