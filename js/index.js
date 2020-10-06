function fibonacciGenerator(n) {
  var output = [];
  if (n == 0) {
    output = ["Nothing"];
  } else if (n == 1) {
    output = [0];
  } else if (n == 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
};

function generate() {
  var num = document.getElementById("fnumber").value;
  var output = fibonacciGenerator(num);
  if (num == 0 || num == 1) {
    document.getElementById("fnumbers").innerHTML = "The " + num + " Fibonacci Number is: \n" + output.join('\r\n');
    alert("The " + num + " Fibonacci Number is: \n" + output);
  } else {
    document.getElementById("fnumbers").innerHTML = "The " + num + " Fibonacci Numbers are: \n" + output.join('\r\n');
    alert("The " + num + " Fibonacci Numbers are: \n" + output);
  }

}

function reset() {
  document.getElementById("fnumber").innerHTML = "0";
  document.getElementById("fnumbers").innerHTML = "";
}
