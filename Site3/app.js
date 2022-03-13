function formulay(m, x, c) {
    var m = parseFloat(document.getElementById("myInputm").value);
    var c = parseFloat(document.getElementById("myInputc").value);
    var x = parseFloat(document.getElementById("myInputx").value);
    var y = Math.sin(x)/(1+Math.pow(m,2))-c*m*Math.sin(x);
    document.getElementById("demo1").innerHTML = "The value of y is: " + y;
};

function formulaw(a, x, y) {
    var m = parseFloat(document.getElementById("myInputm").value);
    var c = parseFloat(document.getElementById("myInputc").value);
    var a = parseFloat(document.getElementById("myInputa").value);
    var x = parseFloat(document.getElementById("myInputx").value);
    var y = Math.sin(x)/(1+Math.pow(m,2))-c*m*Math.sin(x);
    var w = Math.pow(Math.E, ((-1)*a*x))*Math.sqrt(x+1) + Math.pow(Math.E, (a*x))*Math.pow(y,a)*Math.sqrt(x+1.5);
    document.getElementById("demo2").innerHTML = "The value of w is: " + w;
};

