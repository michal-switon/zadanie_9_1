function getTriangleArea(a, h) {

    if ( (a <= 0) && (h <= 0) ) {
        var value = "Nieprawidłowe dane";
    }

    else if ( (a > 0) && (h > 0) ) {
        var value = a*h/2;
    }

    return (value);

}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(5, 6);
var triangle3Area = getTriangleArea(17, 21);