function getTriangleArea(a, h) {

    if ( (a > 0) && (h > 0) ) {
        return a*h/2;
    }

    else  {
        return "Nieprawidłowe dane"
    }

}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(5, 6);
var triangle3Area = getTriangleArea(17, 21);