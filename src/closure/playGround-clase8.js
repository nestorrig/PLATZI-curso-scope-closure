// INFO: https://platzi.com/clases/3213-javascript-closures-scope/55621-playground-crea-un-closure-para-sumar/
function sumWithClosure(firstNum) {
function sum(secondNum = 0) {
        return firstNum + secondNum
    }
    return sum
}
sumWithClosure(2)(3);
sumWithClosure(90)();