//-------------------------------------------------------------------
//                   Ex2
//-------------------------------------------------------------------
function printDate() {
  document.getElementById("demo").innerHTML = Date();
}
//-------------------------------------------------------------------
//                    Ex3
//-------------------------------------------------------------------
function oddOrEven(num) {
  console.log(num); // this line is for debuging
  var n = Number(num);
  console.log(n); // this line is for debuging
  var res;
  if (n % 2 == 0) {
    res = "even";
  } else {
    res = "odd";
  }
  document.getElementById("output").innerHTML = "this number is:" + res;
}
//-------------------------------------------------------------------
//                      Ex4
//-------------------------------------------------------------------
function writePrimeNumbers() {
  var n = Number(prompt("enter the number"));
  function isPrime(k) {
    for (var j = 2; j < k; j++) if (k % j == 0) return false;
    return true;
  }
  for (var i = 2; i < n; i++)
    if (isPrime(i)) {
      document.write(i);
      document.write("<br>");
    }
}
//-------------------------------------------------------------------
//                      Ex5
//-------------------------------------------------------------------
