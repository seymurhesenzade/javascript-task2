

                                                          // !LOOPS

// ? Task 2: Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.


// let num = Number(prompt("Eded daxil edin ."));

// for (let i = 1; i <=num; i++) {
//     if (num%i==0) {

//         console.log(i);
//     }

// }

// ? Task 3 Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.


// let number = parseInt(prompt("Zehmet olmasa bir eded girin"));
// let count=0;
// for (let i = 1; i <= number; i++) {

//     if (number % i ===0) {

//         count++;
       
        
//     }    
// }
// console.log(count); 




// ? Task  4:  For loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

// for (let i = 0; i <= 10; i++) {
//   for (let i = 0; i <= 10; i++) {
//     console.log(i + "x" + i + "=" + i * i);
//   }
//   if ((i = 10)) {
//     break;
//   }
// }

                                                                    // !FUNCTIONS


// ? Task 2:  Daxil edilən ədədin kvadratını return edən funksiya yazın.

// let eded = Number(prompt("Eded Daxil Edin."));

// function multiplay(num){
//     return console.log(num**2);
// }

// multiplay(eded)


// ? Task 3:  4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.

// let firstNumber = Number(prompt("Eded 1-i daxil edin "));
// let secondNumber = Number(prompt("Eded 2-i daxil edin "));


// //SUM FUNCTION
// function sum(firstNumber,secondNumber) {
//     return console.log("Cemin neticesi :"+ Number(firstNumber+secondNumber));
// }

// //SUBTRACT FUNCTION
// function subtract(firstNumber,secondNumber) {
//     return console.log("Ferqin neticesi :"+Number(firstNumber-secondNumber));
// }

// //DEVICE FUNCTION 
// function device(firstNumber,secondNumber) {
//     return console.log("Bolmenin neticesi :"+Number(firstNumber/secondNumber));
// }

// //MULTIPLAY FUNCTION
// function multiplay(firstNumber,secondNumber) {
//     return console.log("Vurmanin neticesi :"+Number(firstNumber*secondNumber));
// }

// sum(firstNumber,secondNumber);
// subtract(firstNumber,secondNumber);
// device(firstNumber,secondNumber);
// multiplay(firstNumber,secondNumber);


// ? Task 4:  Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin.

// let parametr1= Number(prompt("Birinci ededi daxil edin :"));
// let parametr2= Number(prompt("Ikinci ededi daxil edin :"));
// let operator= prompt("Bir eded operator secin *,/,+,- ")

// function hesablama (parametr1, parametr2, operator) {
    

// switch (operator) {
//     case "*":
//         return console.log(parametr1*parametr2);
        
//         break;


//     case "/":
//         return console.log(parametr1/parametr2);

//         break;


//     case "+":
//         return console.log(parametr1+parametr2);

//         break;


//     case "-":
//         return console.log(parametr1-parametr2);

//         break;

//     default:
//         break;
// }
// }
// hesablama(parametr1,parametr2,operator)

// ? A ile baslayib a ile biten seher adlari"

// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian", "Australila", "Afganistan", "Austria"];

// for (let i = 0; i < countries.length; i++) {
//     if (
//         countries[i][0].toLowerCase() ==="a" &&
//         countries[i][countries[i].length-1].toLowerCase()==="a"
//     )
//     {
//         console.log(countries[i]);
//     }
// }
