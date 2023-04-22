//function parseCount(value) {
//    let result = Number.parseFloat(value);
//    if (isNaN(result) === true) {
//        throw new Error("Невалидное значение")
//    } else {
//        return result;
//    }
//}
//
//function validateCount(value) {
//    try {
//        return parseCount(value);
//    } catch (error) {
//        return error;
//    }
//}
//
//
//class Triangle {
//    constructor(a, b, c) {
//
//        this.a = a;
//        this.b = b;
//        this.c = c;
//        this.triangleCheck()
//    }
//
//    triangleCheck() {
//        if ((this.a + this.b) < this.c || (this.b + this.c) < this.a || (this.a + this.c) < this.b) {
//            throw new Error ("Треугольник с такими сторонами не существует");
//        }
//    }
//
//    getPerimeter() {
//       return this.a + this.b + this.c;
//    }
//
//    getArea(){
//        let p = 0.5 * (this.a + this.b + this.c);
//        let s = parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
//        return s;
//     }
//}
//
//function getTriangle (a, b, c) {
//    try {
//        let t = new Triangle(a, b, c);
//        return t;
//    } catch (err) {
//        return {
//            getArea: function() {return "Ошибка! Треугольник не существует"},
//            getPerimeter: function() {return "Ошибка! Треугольник не существует"}
//          }
//    }
//}
function parseCount(parseNumber) {
    let result = Number.parseFloat(parseNumber, 10);
    myError = new Error("Невалидное значение");
    if (Number.isNaN(Number.parseFloat(parseNumber))) {
      throw myError;
    } else {
      return result;
    }
  }
  function validateCount(toParse) {
    try {
      let result = parseCount(toParse);
      return result;
    } catch (myError) {
      console.log(myError);
      return myError;
    }
  }

  class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      if (a + b < c || a + c < b || b + c < a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }
    get perimeter() {
      return this.a + this.b + this.c;
    }
    get area() {
      let s = this.perimeter / 2;
      return Number(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(3)
      );
    }
  }

  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (err) {
      return {
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        },

        get area() {
          return "Ошибка! Треугольник не существует";
        },
      };
    }
  }